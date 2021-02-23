function setupPaymentModal(clientKey, code) {
    var foo = Worldpay.useTemplateForm({
        'clientKey': clientKey,
        'form': 'paymentForm',
        'paymentSection': 'paymentSection',
        'display': 'inline',
        'code': code,
        'callback': function (obj) {
            if (obj && obj.token) {
                console.log(obj.token);
            }
        }
    });
}
