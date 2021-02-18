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
            border: 1px solid #ff5250;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, .15);
            font-size: 16px;
            line-height: 24px;
            font-family: 'Helvetica Neue', 'Helvetica',
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
            font-size: 25px;
            line-height: 45px;
            padding-top: 25px;
            padding-bottom: 0;
            text-align: center;
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
            .booking-code {
               text-align: center;
               font-size: 15px;
               padding-top: 0;
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
                        <td class="logo" rowspan="2"><img  src="https://www.espero.it/wp-content-secure/uploads/2018/06/dechitESPERO.jpg"
                           style="width:100%; max-width:100px;"></td>
                        <td class="title">
                           Dechit Booking System
                        </td>
                     </tr>
                     <tr><td class="booking-code">Codice di prenotazione: ${receiptId}</td></tr>
                  </table>
               </td>
            </tr>
            <table>
               <tr class="heading">
                  <td colspan="2">Riepilogo prenotazione:</td>
               </tr>
               <tr class="item">
                  <td>Data:</td>
                  <td>09/09/09</td>
               </tr>
               <tr class="item">
                  <td>Slot temporale:</td>
                  <td>11.00 - 12.00</td>
               </tr>
               <tr class="item">
                  <td>Nome:</td>
                  <td>${name}</td>
               </tr>
               <tr class="item">
                  <td>Email:</td>
                  <td>matteo.raccone@gmail.com</td>
               </tr>
               <tr class="item last">
                  <td>Costo totale:</td>
                  <td>${parseInt(price1) + parseInt(price2)}€</td>
               </tr>
            </table>
         </table>
         </div>
       </body>
    </html>
    `;
};