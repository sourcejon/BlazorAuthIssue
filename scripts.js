function setupPaymentModal(clientKey, code, dotNetObject) {
    var foo = Worldpay.useTemplateForm({
        'clientKey': clientKey,
        'form': 'paymentForm',
        'paymentSection': 'paymentSection',
        'display': 'inline',
        'code': code,
        'callback': function (obj) {
            if (obj && obj.token) {
                dotNetObject.invokeMethodAsync("SubmitPaymentForm", obj.token);
            }
        }
    });
}