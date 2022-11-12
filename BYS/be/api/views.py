from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser, JSONParser
from rest_framework.permissions import AllowAny

from api.models import Authority, Sign
from api.serializers import AuthorityDisplaySerializer
from api.utils import connect_w3_instance
from be.responses import response_200, is_request_valid, response_400, response_500
from eth_account.messages import encode_defunct


@api_view(['GET'])
@permission_classes([AllowAny])
@parser_classes([JSONParser])
def get_authorities(request):
    authorities = Authority.objects.all().order_by('-created_at')
    serializer = AuthorityDisplaySerializer(instance=authorities, many=True)
    return response_200(data=serializer.data)


@api_view(['POST'])
@permission_classes([AllowAny])
@parser_classes([FormParser, MultiPartParser])
def create_authority(request):
    request_status = is_request_valid(data_dict=request.data,
                                      key_values=['authorityName', 'authorityLogo', 'authorityWalletAddress'])
    if not request_status:
        return response_400()

    authority_name = request.data['authorityName']
    authority_logo = request.data['authorityLogo']
    authority_wallet_address = request.data['authorityWalletAddress']

    try:
        Authority.objects.create(
            authority_logo=authority_logo,
            wallet_address=authority_wallet_address,
            name=authority_name
        )
        return response_200()
    except Exception as e:
        return response_500(e)


@api_view(['GET'])
@permission_classes([AllowAny])
def get_authority(request, wallet_address):
    try:
        authority = Authority.objects.get(wallet_address=wallet_address)
    except Exception as e:
        return response_500(e)

    serializer = AuthorityDisplaySerializer(instance=authority, many=False)
    return response_200(data=serializer.data)


@api_view(['GET'])
@permission_classes([AllowAny])
def get_text_to_sign(request, wallet_address):
    sign = Sign.objects.create(
        wallet_address=wallet_address
    )

    return response_200(
        data=sign.text
    )


@api_view(['GET'])
@permission_classes([AllowAny])
def verify_signature(request, wallet_address, signature):
    w3 = connect_w3_instance()
    if w3 is False:
        return response_400()

    sign = Sign.objects.filter(wallet_address=wallet_address).last()

    wallet_address = wallet_address.lower()
    raw_text = sign.text
    hashed_text_to_sign = encode_defunct(text=raw_text)
    returned_account = w3.eth.account.recover_message(hashed_text_to_sign, signature=signature)
    returned_account = returned_account.lower()

    if returned_account == wallet_address:
        return response_200()
    else:
        return response_400()
