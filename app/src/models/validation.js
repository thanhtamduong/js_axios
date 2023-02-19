function Validation() {
  this.kiemTraDoDaiMa = function (value, spanId, mess, min, max) {
    if (value.length >= min && value.length <= max) {
      getEle(spanId).style.display = "none";
      getEle(spanId).innerHTML = "";
      return true;
    }
    getEle(spanId).style.display = "block";
    getEle(spanId).innerHTML = mess;
    return false;
  };
}

// function Validation(options) {
//   console.log(options);
//   var formElement = document.querySelector(options.form);
//   if (formElement) {
//     options.rules.forEach(function (rules) {
//       var inputElement = formElement.querySelector(rules.selector);
//       if (inputElement) {
//         inputElement.onblur = function () {
//           var errorMessage = rules.test(inputElement.value);
//           if (errorMessage) {
//             inputElement.querySelector("tbMaNhanVien") = errorMessage;
//           }
//         };
//       }
//     });
//   }
// }
// Validation.isCheckId = function (selector) {
//   return {
//     selector: selector,
//     test: function (value) {
//       return value ? undefined : "Vui lòng nhập mã 4 -> 6 ký tự";
//     },
//   };
// };
