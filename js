$(document).ready(function() {
    var quotes = [
        'Life is what happens to you while you\'re looking at your smartphone.',
        'An emoji is worth 1,000 words.',
        'Beauty is in the eye of the executive producer',
        'Money can\'t buy happiness, but it can buy anti-depressants.',
        'You are what you download.',
        'The revolution will be Tweeted, Liked and Shared',
        'The send button is mightier than the sword.',
        'What doesn\'t kill you makes you wish it did.',
        'The grass is always greener when it\'s covered with money.',
        'If you don\'t have anything nice to say, then say something clever and devastating.',
        'Be nice to nerds, you may end up working for one.',
        'Failure is the condiment that gives success its flavor',
        'It takes less time to do something right than explain why you did it wrong.'
    ];

    function newQuote() {
        var randomNumber = Math.floor(Math.random() * quotes.length);
        $('#quoteDisplay').fadeOut(function() {
            $(this).html(quotes[randomNumber]).fadeIn();
        });
    }

    $('#new-quote').click(newQuote);

    // Display a quote when the page loads
    newQuote();
});
