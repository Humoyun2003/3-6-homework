var priceTicket = 150; //Dollars
var priceHotel = 250; //Dollars
var priceTravel = 120; //Euros
priceTicket *= 9433.34; //So'm
priceHotel *= 9433.34; //So'm
priceTravel *= 10354.03; //So'm
var priceFullTravel = priceTicket + priceHotel + priceTravel;
alert(`Assalomu aleykum Alisher sizning sayohatingiz uchun yordam berayotganimizdan xursandmiz`);
var moneyAlisher = prompt(`Iltimos qancha pulingiz borligini so'm da kiriting`);
if (moneyAlisher >= priceFullTravel)
    alert(`Oq yo’l, Alisher!`);
else
    alert(`Alisher, ozgina sabr qilish kerak bo’lar ekan.`);
