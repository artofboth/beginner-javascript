//Placing the whole thing inside a function and quitting it if the element is not found is a way to prevent it executing in pages where the element isn't present. 

function scrollToAccept() {

    const terms = document.querySelector('.terms-and-conditions');

    if (!terms) {
        return;
    };

    const button = document.querySelector('.accept');

    function obCallBack(payload) {
        if (payload[0].intersectionRatio === 1) {
            button.disabled = false;
            //Stop observing the element afterwards
            ob.unobserve(terms.lastElementChild);
        };

    }

    const ob = new IntersectionObserver(obCallBack, {
        root: terms,
        threshold: 1,
    });

    ob.observe(terms.lastElementChild);

    // terms.addEventListener('scroll', function (e) {
    //     console.log(e);
    // });
};

scrollToAccept();