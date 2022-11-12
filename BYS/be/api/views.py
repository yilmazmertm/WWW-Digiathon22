from rest_framework.decorators import api_view, permission_classes, parser_classes
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.permissions import AllowAny

from api.models import Authority
from be.responses import response_200, is_request_valid, response_400, response_500


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
