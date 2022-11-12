from django.utils import timezone
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from web3 import Web3

from api.abi import get_abi
from api.utils import connect_w3_instance
from be import settings
from be.responses import is_request_valid, response_400, response_500, response_200


@api_view(['POST'])
@permission_classes([AllowAny])
def transact(request):
    request_status = is_request_valid(data_dict=request.data,
                                      key_values=['documentHash'])
    if not request_status:
        return response_400()

    from random import randint
    s = ''
    for i in range(16):
        s = s + str(randint(0, 9))

    now = timezone.now()
    day = now.day
    month = now.month
    year = str(now.year)[-2:]

    document_id = f"TR01-{day}{month}{year}-0016-343634457-{s}"
    document_hash = request.data['documentHash']

    w3 = connect_w3_instance("http://127.0.0.1:8545")
    if w3 is False:
        return response_500()

    w3_avax = connect_w3_instance(settings.RPC_URL_AVAX)

    contract = w3_avax.eth.contract(address=settings.CONTRACT_ADDRESS, abi=get_abi())
    tx = contract.functions.registerDocument(document_hash, document_id).build_transaction({
        'from': '0xEE341dC67907a7bF4b33dB85B1e725bDFa8ed1fC',
    })
    y = w3.eth.send_transaction(tx)
    w3.eth.wait_for_transaction_receipt(Web3.toHex(y))
    return response_200(data={
        "docId": document_id,
        "txHash": Web3.toHex(x)
    })
