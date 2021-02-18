module.exports = ({ name, price1, price2, receiptId }) => {
    const today = new Date();
return `
    <!doctype html>
    <html>
       <head>
          <meta charset="utf-8">
          <title>PDF Result Template</title>
          <style>
             .invoice-box {
             max-width: 800px;
             margin: auto;
             padding: 30px;
             border: 1px solid #eee;
             box-shadow: 0 0 10px rgba(0, 0, 0, .15);
             font-size: 16px;
             line-height: 24px;
             font-family: 'Helvetica Neue', 'Helvetica',
             color: #555;
             }
             .margin-top {
             margin-top: 50px;
             }
             .justify-center {
             text-align: center;
             }
             .invoice-box table {
             width: 100%;
             line-height: inherit;
             text-align: left;
             }
             .invoice-box table td {
             padding: 5px;
             vertical-align: top;
             }
             .invoice-box table tr td:nth-child(2) {
             text-align: right;
             }
             .invoice-box table tr.top table td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.top table td.title {
             font-size: 45px;
             line-height: 45px;
             color: #333;
             }
             .invoice-box table tr.information table td {
             padding-bottom: 40px;
             }
             .invoice-box table tr.heading td {
             background: #eee;
             border-bottom: 1px solid #ddd;
             font-weight: bold;
             }
             .invoice-box table tr.details td {
             padding-bottom: 20px;
             }
             .invoice-box table tr.item td {
             border-bottom: 1px solid #eee;
             }
             .invoice-box table tr.item.last td {
             border-bottom: none;
             }
             .invoice-box table tr.total td:nth-child(2) {
             border-top: 2px solid #eee;
             font-weight: bold;
             }
             @media only screen and (max-width: 600px) {
             .invoice-box table tr.top table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             .invoice-box table tr.information table td {
             width: 100%;
             display: block;
             text-align: center;
             }
             }
          </style>
       </head>
       <body>
          <div class="invoice-box">
             <table cellpadding="0" cellspacing="0">
                <tr class="top">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td class="title"><img  src="data:image/jpeg;base64,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"
                               style="width:100%; max-width:156px;"></td>
                            <td>
                               Datum: ${`${today.getDate()}. ${today.getMonth() + 1}. ${today.getFullYear()}.`}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="information">
                   <td colspan="2">
                      <table>
                         <tr>
                            <td>
                               Customer name: ${name}
                            </td>
                            <td>
                               Receipt number: ${receiptId}
                            </td>
                         </tr>
                      </table>
                   </td>
                </tr>
                <tr class="heading">
                   <td>Bought items:</td>
                   <td>Price</td>
                </tr>
                <tr class="item">
                   <td>First item:</td>
                   <td>${price1}$</td>
                </tr>
                <tr class="item">
                   <td>Second item:</td>
                   <td>${price2}$</td>
                </tr>
             </table>
             <br />
             <h1 class="justify-center">Total price: ${parseInt(price1) + parseInt(price2)}$</h1>
          </div>
       </body>
    </html>
    `;
};