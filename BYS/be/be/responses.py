from rest_framework.response import Response


def is_request_valid(data_dict, key_values):
    data_keys = list(data_dict.keys())

    for key_value in key_values:
        if key_value not in data_keys:
            return False

    return True


def response_200(data=None):
    return Response({
        "error": False,
        "errorMsg": "completed",
        "errorCode": 200,
        "data": data
    }, status=200)


def response_400(data=None):
    return Response({
        "error": True,
        "errorMsg": "Request not valid",
        "errorCode": 400,
        "data": data
    }, status=400)


def response_403():
    return Response({
        "error": True,
        "errorMsg": "Not authorized",
        "errorCode": 403,
        "data": None
    }, status=403)


def response_500(e, error_code="-"):
    return Response({
        "error": True,
        "errorMsg": str(e),
        "errorCode": error_code,
        "data": None
    }, status=500)
