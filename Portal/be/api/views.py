import io
from random import randint

from django.http import FileResponse
from django.utils import timezone
from reportlab.pdfgen import canvas
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from web3 import Web3

from api.abi import get_abi
from api.models import DocumentId
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

    document_id = DocumentId.objects.all().last().document_id
    document_hash = request.data['documentHash']

    w3 = connect_w3_instance("http://127.0.0.1:8545")
    if w3 is False:
        return response_500()
    try:
        w3_avax = connect_w3_instance(settings.RPC_URL_AVAX)

        contract = w3_avax.eth.contract(address=settings.CONTRACT_ADDRESS, abi=get_abi())
        tx = contract.functions.registerDocument(document_hash, document_id).build_transaction({
            'from': '0xEE341dC67907a7bF4b33dB85B1e725bDFa8ed1fC',
            'gasPrice': 25000000000
        })
        y = w3.eth.send_transaction(tx)
        w3.eth.wait_for_transaction_receipt(Web3.toHex(y))
        print(document_id)
        return response_200(data={
            "docId": document_id,
            "txHash": Web3.toHex(y)
        })
    except Exception as e:
        print(str(e))
        return response_200(data={
            "docId": "Eth Signer must be set up",
            "txHash": "Eth Signer must be set up"
        })


@api_view(['GET'])
@permission_classes([AllowAny])
def create_pdf(request, name, surname):
    s = ''
    for i in range(16):
        s = s + str(randint(0, 9))

    now = timezone.now()
    day = now.day
    month = now.month
    year = str(now.year)[-2:]

    document_id = f"TR01-{day}{month}{year}-0016-343634457-{s}"

    DocumentId.objects.create(
        document_id=document_id
    )

    buffer = io.BytesIO()
    p = canvas.Canvas(buffer)
    p.setPageSize((990, 818))
    p.drawImage("adli-sicil.png", x=0, y=0)
    p.drawString(345, 325, f"{name} {surname}".upper())
    p.drawString(340, 520, f"{document_id}")
    p.setFontSize(16)

    p.showPage()
    p.save()

    buffer.seek(0)
    return FileResponse(buffer, as_attachment=True, filename='hello.pdf')
