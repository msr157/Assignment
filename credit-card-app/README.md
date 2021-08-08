A great credit card form with seamless and enjoyable micro interactions Number formatting, validation, and automated card-type recognition features, all  included.


GITHUB Repo Link: https://github.com/msr157/Assignment/

Netlify Link: https://dreamy-pike-6d3e10.netlify.app/


Auto Detection Rule:
NOTE: Type in First "card number form".

Visa: if it starts with a 4 it’s a Visa [16 digits (13 in some special cases)]

American Express: starts with 34 or 37 [15 digits]

CUP: starts with 62 or 81 [16–19 digits, increasing the complexity but still everything under control]

Mastercard: First 2 digits can range from 51 to 55, but as mentioned above since 2017. they also cover the 2221-2720 range [luckily in both cases 16 digits]

Discover: if it starts with 64 or 65 [16–19 digits] it’s definitely Discover, but…
It can also start with any of these 6011, 622126 – 622925, 624000 – 626999, 628200 – 628899 

Diners: 36 definitely Diners [14-19 digits], but also 300–305, 3095, 38–39 [note that these range from 16-19 digits]

JBC: covers the range 3528-3589 [16–19 digits]
