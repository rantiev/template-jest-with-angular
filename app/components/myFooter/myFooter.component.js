(function () {

   class MyFooterController {
        constructor () {

        }

       $onInit () {
           this.updatedText = `Footer ${this.text}`;
       }
    }

    const myFooterComponent = {
        bindings: {
            text: '='
        },
        template: `<div class="footer">{{$ctrl.updatedText}}</div>`,
        controller: MyFooterController
    };

    angular
        .module('myApp')
        .component('myFooter', myFooterComponent);

})();