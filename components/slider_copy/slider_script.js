const DOMReady = (
    callback = () => { },
    element = document,
    listener = 'addEventListener') => {
    return element[listener] ? element[listener]('DOMContentLoaded', callback) : window.attachEvent('onload', callback);
};

const ProjectAPI = (() => {
    let hasClass,
        addClass,
        removeClass;

    hasClass = (el, className) => {
        if (el === null) {
            return;
        }

        if (el.classList) {
            return el.classList.contains(className);
        } else {
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        }
    };

    addClass = (el, className) => {
        if (el === null) {
            return;
        }

        if (el.classList) {
            el.classList.add(className);
        } else
            if (!hasClass(el, className)) {
                el.className += ' ' + className;
            }
    };

    removeClass = (el, className) => {
        if (el === null) {
            return;
        }

        if (el.classList) {
            el.classList.remove(className);
        } else
            if (hasClass(el, className)) {
                let reg = new RegExp('(\\s|^)' + className + '(\\s|$)');

                el.className = el.className.replace(reg, ' ');
            }
    };

    return {
        hasClass: hasClass,
        addClass: addClass,
        removeClass: removeClass
    };

})();



const readyFunction = () => {

    const KEY_UP = 38;
    const KEY_DOWN = 40;

    let scrollingClass = 'js-scrolling',
        scrollingActiveClass = scrollingClass + '--active',
        scrollingInactiveClass = scrollingClass + '--inactive',

        scrollingTime = 1350,
        scrollingIsActive = false,

        currentPage = 1,
        countOfPages = document.querySelectorAll('.' + scrollingClass + '__page').length,

        prefixPage = '.' + scrollingClass + '__page-',

        _switchPages,
        _scrollingUp,
        _scrollingDown,

        _mouseWheelEvent,
        _keyDownEvent,

        init;

    _switchPages = () => {

        let _getPageDomEl;

        /**
                             *  @function _getPageDomEl
                             *
                             *  @param page
                             *  @returns {Element}
                             *  @private
                            */
        _getPageDomEl = (page = currentPage) => {
            return document.querySelector(prefixPage + page);
        };

        scrollingIsActive = true;


        ProjectAPI.removeClass(
            _getPageDomEl(),
            scrollingInactiveClass);

        ProjectAPI.addClass(
            _getPageDomEl(),
            scrollingActiveClass);


        ProjectAPI.addClass(
            _getPageDomEl(currentPage - 1),
            scrollingInactiveClass);


        ProjectAPI.removeClass(
            _getPageDomEl(currentPage + 1),
            scrollingActiveClass);



        setTimeout(
            () => {
                return scrollingIsActive = false;
            },
            scrollingTime);

    };

    _scrollingUp = () => {
        if (currentPage === 1) {
            return;
        }

        currentPage--;

        _switchPages();
    };

    _scrollingDown = () => {
        if (currentPage === countOfPages) {
            return;
        }

        currentPage++;

        _switchPages();
    };

    _mouseWheelEvent = e => {
        if (scrollingIsActive) {
            return;
        }

        if (e.wheelDelta > 0 || e.detail < 0) {
            _scrollingUp();
        } else
            if (e.wheelDelta < 0 || e.detail > 0) {
                _scrollingDown();
            }
    };

    _keyDownEvent = e => {
        if (scrollingIsActive) {
            return;
        }

        let keyCode = e.keyCode || e.which;

        if (keyCode === KEY_UP) {
            _scrollingUp();
        } else
            if (keyCode === KEY_DOWN) {
                _scrollingDown();
            }
    };


    init = (() => {
        document.addEventListener(
            'mousewheel',
            _mouseWheelEvent,
            false);

        document.addEventListener(
            'DOMMouseScroll',
            _mouseWheelEvent,
            false);


        document.addEventListener(
            'keydown',
            _keyDownEvent,
            false);

    })();

};


DOMReady(readyFunction);