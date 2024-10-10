//Lokacija stranice
let url = window.location.pathname;
url = url.substring(url.lastIndexOf("/"));

console.log(url);

//Pocetna stranica / Home
if (url == "/index.php" || url == "/") {
  $(document).ready(function () {
    if ($(document).scrollTop() < $("#header").outerHeight())
      $("#header").addClass("bgTransparent");

    $(document).scroll(function () {
      if ($(document).scrollTop() > $("#header").outerHeight())
        $("#header").removeClass("bgTransparent");
      else $("#header").addClass("bgTransparent");
    });
  });
}
$(document).ready(function () {
  // LOGIN MODAL
  $(".btnLogin").click(function (e) {
    e.preventDefault();
  });

  $("#btnLogin").click(function () {
    openLoginModal("login");
  });

  $("#btnRegister").click(function () {
    openLoginModal("register");
  });

  function openLoginModal(data) {
    $("body").append(
      "<div id='loginModal'><div class='cover'><div id='loginContainer'><div id='loginModalContent'></div><button id='btnCloseLoginModal' class='font-medium'><i class='fas fa-times'></i></butotn></div></div></div>"
    );
    loginModalContent(data);
    $("#loginModal .cover, #btnCloseLoginModal").mousedown(closeLoginModal);
    $("#loginContainer").mousedown(function (e) {
      e.stopPropagation();
    });
    $("#loginModal .cover, #loginContainer").hide();
    $("#loginModal .cover").fadeIn("fast", function () {
      $("#loginContainer").fadeIn("fast");
    });
  }

  function closeLoginModal() {
    $("#loginContainer").fadeOut("fast", function () {
      $("#loginModal .cover").fadeOut("fast", function () {
        $("#loginModal").remove();
      });
    });
  }

  function loginModalContent(data) {
    let html;
    if (data == "login") {
      html =
        "<h3 class='font-large textCenter'>Log in</h3><form class='font-small'><div class='formGroup'><label for='tbLoginEmail'>Email:</label><input type='email' id='tbLoginEmail' class='textField font-small' autocomplete='off'/><label class='errorMessage font-small'>examplename@example.com</label></div><div class='formGroup'><label for='tbLoginPassword'>Password:</label><input type='password' id='tbLoginPassword' class='textField font-small'/><label class='errorMessage font-small'>Your password must:<ul><li>- contain 1 lowercase letter</li><li>- contain 1 uppercase letter</li><li>- contain 1 number</li><li>- contain 1 special character</li><li>- be 8 characters or longer</li></ul></label></div><div class='formGroup'><button id='btnLoginSubmit' class='btnPrimary font-small'>Log in</button></div></form><a href='#' id='changeToRegister' class='font-small'>Not a user? Register here</a>";
    } else {
      html =
        "<h3 class='font-large textCenter'>Register</h3><form class='font-small'><div class='formGroup'><label for='tbRegisterUsername'>Username:</label><input type='text' id='tbRegisterUsername' maxlength='20' class='textField font-small' autocomplete='off'/><label class='errorMessage font-small'>Your username must:<ul><li>- start with a letter</li><li>- be 5 characters or longer</li><li>- not contain special characters other than '_'</li></ul></label></div><div class='formGroup'><label for='tbRegisterEmail'>Email:</label><input type='email' id='tbRegisterEmail' class='textField font-small' autocomplete='off'/><label class='errorMessage font-small'>examplename@example.com</label></div><div class='formGroup'><label for='tbRegisterPassword'>Password:</label><input type='password' id='tbRegisterPassword' class='textField font-small'/><label class='errorMessage font-small'>Your password must:<ul><li>- contain 1 lowercase letter</li><li>- contain 1 uppercase letter</li><li>- contain 1 number</li><li>- contain 1 special character</li><li>- be 8 characters or longer</li></ul></label></div><div class='formGroup'><label for='tbRegisterRepeatPassword'>Repeat Password:</label><input type='password' id='tbRegisterRepeatPassword' class='textField font-small'/><label class='errorMessage font-small'>Passwords don't match</label></div><div class='formGroup'><button id='btnRegisterSubmit' class='btnPrimary font-small'>Register</button></div></form><a href='#' id='changeToLogin' class='font-small'>Already have an account? Log in</a>";
    }
    $("#loginModalContent").html(html);
    $("#loginModalContent a").click(function (e) {
      e.preventDefault();
      if ($(this).attr("id") == "changeToRegister")
        loginModalContent("register");
      else loginModalContent("login");
    });

    // form validation
    if (data == "login") {
      // LOGIN
      // email
      var regExpLoginEmail =
        /^[a-z][a-z0-9-_\.]{2,}@([a-z0-9-_]{2,}\.)+[a-z]{2,}$/;
      var $tbLoginEmail = $("#tbLoginEmail");
      $tbLoginEmail.blur(checkLoginEmail);
      function checkLoginEmail() {
        checkRegExp($tbLoginEmail, regExpLoginEmail);
      }

      // password
      var regExpLoginPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
      var $tbLoginPassword = $("#tbLoginPassword");
      $tbLoginPassword.blur(checkLoginPassword);
      function checkLoginPassword() {
        checkRegExp($tbLoginPassword, regExpLoginPassword);
      }

      // form submition
      var checkLoginFunctions = [checkLoginEmail, checkLoginPassword];
      $("#btnLoginSubmit").click(function (e) {
        submitForm(checkLoginFunctions);
        if (noErrors) {
          ajaxCallback(
            "assets/php/forms/login-form-validation.php",
            "post",
            function () {
              location.reload();
            },
            {
              email: $("#tbLoginEmail").val(),
              password: $("#tbLoginPassword").val(),
            }
          );
        }
        e.preventDefault();
      });
    } else {
      // REGISTRATION
      // username
      var regExpRegisterUsername = /^[a-zA-Z]\w{4,}$/;
      var $tbRegisterUsername = $("#tbRegisterUsername");
      $tbRegisterUsername.blur(checkRegisterUsername);
      function checkRegisterUsername() {
        checkRegExp($tbRegisterUsername, regExpRegisterUsername);
      }

      // email
      var regExpRegisterEmail =
        /^[a-z][a-z0-9-_\.]{2,}@([a-z0-9-_]{2,}\.)+[a-z]{2,}$/;
      var $tbRegisterEmail = $("#tbRegisterEmail");
      $tbRegisterEmail.blur(checkRegisterEmail);
      function checkRegisterEmail() {
        checkRegExp($tbRegisterEmail, regExpRegisterEmail);
      }

      // password
      var regExpRegisterPassword =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
      var $tbRegisterPassword = $("#tbRegisterPassword");
      $tbRegisterPassword.blur(checkRegisterPassword);
      function checkRegisterPassword() {
        checkRegExp($tbRegisterPassword, regExpRegisterPassword);
        if ($("#tbRegisterRepeatPassword").val() != "")
          checkRegisterRepeatPassword();
      }

      // repeat password
      var $tbRegisterRepeatPassword = $("#tbRegisterRepeatPassword");
      $tbRegisterRepeatPassword.blur(checkRegisterRepeatPassword);
      function checkRegisterRepeatPassword() {
        if (
          $($tbRegisterPassword).hasClass("borderYellow") &&
          $($tbRegisterRepeatPassword).val() == $($tbRegisterPassword).val()
        ) {
          fieldCorrect($tbRegisterRepeatPassword);
        } else {
          fieldIncorrect($tbRegisterRepeatPassword);
        }
      }

      // form submition
      var checkRegisterFunctions = [
        checkRegisterEmail,
        checkRegisterPassword,
        checkRegisterRepeatPassword,
        checkRegisterUsername,
      ];
      $("#btnRegisterSubmit").click(function (e) {
        submitForm(checkRegisterFunctions);
        if (noErrors) {
          ajaxCallback(
            "assets/php/forms/register-form-validation.php",
            "post",
            function (output) {
              clearForm($("#loginModalContent form"));
              closeLoginModal();
              openModal(output.response);
            },
            {
              username: $("#tbRegisterUsername").val(),
              email: $("#tbRegisterEmail").val(),
              password: $("#tbRegisterPassword").val(),
              repeatPassword: $("#tbRegisterRepeatPassword").val(),
            }
          );
        }
        e.preventDefault();
      });
    }
  }

  // ACTIVE CLASS
  addActiveClass();

  function addActiveClass() {
    var currentPage = location.pathname;
    var pageRegExp = /[(\.html)|(\.php)]$/;
    if (!currentPage.match(pageRegExp)) currentPage = "/index.php";
    currentPage = currentPage.substring(
      currentPage.lastIndexOf("/") + 1,
      currentPage.length
    );
    $("#nav ul li a, #sideNavContent ul li a").each(function () {
      $this = $(this);
      if ($this.attr("href").indexOf(currentPage) != -1) {
        $this.addClass("active");
        $this.click(function (e) {
          e.preventDefault();
        });
      }
    });
  }

  // CART
  $("#cart a").click(function (e) {
    ajaxCallback("assets/php/cart-access.php", "get", function () {
      location.href = "cart.php";
    });
    e.preventDefault();
  });

  printCartNumber();

  // SIDENAV
  $("#sideNavContent").css(
    "transition",
    `transform ${sideNavOpenDuration / 1000}s`
  );
  $("#sideNav").hide();
  $("#hamburger a").click(function (e) {
    $("#sideNav").fadeIn("fast", function () {
      $("#sideNavContent").css("transform", "translateX(0px)");
    });
    e.preventDefault();
  });
  $("#sideNav .cover").click(closeSideNav);
  $("#sideNavContent").click(function (e) {
    e.stopPropagation();
  });

  // to top

  $("body").append('<a href="#" id="toTop"><span class="arrow"></span></div>');
  $("#toTop")
    .click(function (e) {
      $(document).scrollTop(0);
      e.preventDefault();
    })
    .hide();
  $(document).scroll(function () {
    if ($(this).scrollTop() >= 200) $("#toTop").fadeIn("fast");
    else $("#toTop").fadeOut("fast");
  });

  $(".textField").keydown(function (e) {
    if (e.keyCode == 13) {
      e.preventDefault();
    }
  });
});

// AJAX
function ajaxCallback(file, requestMethod, result, requestData = {}) {
  $.ajax({
    url: file,
    method: requestMethod,
    data: requestData,
    dataType: "json",
    success: result,
    error: function (xhr) {
      if (xhr.status == 500) {
        console.error(xhr.responseText);
      } else if (xhr.status != 400) {
        openModal(xhr.responseText);
      }
    },
  });
}

// Ls
function loadLocalStorage(data) {
  let cookie = [];
  if (localStorage.getItem(data) != null) {
    cookie = JSON.parse(localStorage.getItem(data));
  }
  return cookie;
}

function updateLocalStorage(data, cookie) {
  localStorage.setItem(cookie, JSON.stringify(data));
}

// korpa
function printCartNumber() {
  let cartDevices = loadLocalStorage("cart");
  var numberOfDevices = 0;
  for (let i in cartDevices) {
    numberOfDevices += cartDevices[i].quantity;
  }
  $("#cartNumber").html(numberOfDevices);
}

// nav
const sideNavOpenDuration = 200;
function closeSideNav() {
  $("#sideNavContent").css("transform", "translateX(-100%)");
  setTimeout(function () {
    $("#sideNav").fadeOut("fast");
  }, sideNavOpenDuration);
}

//Shop stranica
if (url == "/devices.php") {
  var currentPage = 1;

  $(document).ready(function () {
    // PRICE RANGE
    function printPriceRangeValue() {
      $("#priceRange").html(`< ${$("#rnPrice").val()}€`);
    }

    printPriceRangeValue();

    $("#rnPrice").on("input", printPriceRangeValue);

    // DEVICES
    filterDevices();

    function filterDevices(resetPage = false) {
      if (resetPage) currentPage = 1;
      let data = {
        search: getFilter("#tbSearch"),
        order: getFilter("#ddlOrder"),
        os: getFilter(".chbOS"),
        brand: getFilter(".chbBrand"),
        priceRange: getFilter("#rnPrice"),
        page: currentPage,
      };

      ajaxCallback(
        "assets/php/device-filtering.php",
        "get",
        function (output) {
          $("#devicesContainer").html(output.response);
          $(".btnAddToCart").click(function () {
            addToCart(this);
          });
          enablePaging();
        },
        data
      );
    }

    function getFilter(data) {
      if (data.startsWith("#")) return $(data).val();
      else if (data.startsWith(".")) {
        let arr = [];
        for (let el of $(data)) {
          if (el.checked) arr.push(el.value);
        }
        return arr;
      }
    }

  

    // ADDING TO CART
    function addToCart(btn) {
      let cartDevices = loadLocalStorage("cart");
      var deviceId = parseInt($(btn).data("id"));
      var isInCart = false;
      var index;
      for (let i in cartDevices) {
        if (deviceId == cartDevices[i].id) {
          index = i;
          isInCart = true;
          break;
        }
      }
      if (isInCart) {
        if (cartDevices[index].quantity < 10) {
          cartDevices[index].quantity++;
          updateLocalStorage(cartDevices, "cart");
          successfullyAddedModal();
          printCartNumber();
        } else cannotAddModal();
      } else {
        ajaxCallback(
          "assets/php/add-to-cart.php",
          "get",
          function (output) {
            cartDevices.push({
              id: output.id,
              name: output.name,
              price: output.price,
              quantity: 1,
            });
            updateLocalStorage(cartDevices, "cart");
            successfullyAddedModal();
            printCartNumber();
          },
          { deviceId: deviceId }
        );
      }
    }

    function addToCartModal(modal) {
      $("body").append(modal);
      modal.hide();
      modal.fadeIn("fast");
      setTimeout(function () {
        modal.fadeOut("fast", function () {
          modal.remove();
        });
      }, 2000);
    }

    function successfullyAddedModal() {
      var modal = $(
        '<div class="addToCartModal"><div class="addToCartModalContent"><p class="font-small">Item has been succesfully added to your cart.</p></div></div>'
      );
      addToCartModal(modal);
    }

    function cannotAddModal() {
      var modal = $(
        "<div class='addToCartModal'><div class='addToCartModalContent cannotAdd'><p class='font-small'>You can't have more than 10 of the same device in your cart.</p></div></div>"
      );
      addToCartModal(modal);
    }

    // PAGING
    function enablePaging() {
      $(".btnPage")
        .removeClass("disabled")
        .eq(currentPage - 1)
        .addClass("activePage");
      if (currentPage == 1) $(".prevPage").addClass("disabled");
      if (currentPage == $(".btnPage").length)
        $(".nextPage").addClass("disabled");
      $("#paging a").click(function (e) {
        e.preventDefault();
        if (!$(this).hasClass("disabled")) {
          if ($(this).hasClass("prevPage") || $(this).hasClass("nextPage")) {
            if ($(this).hasClass("prevPage")) {
              if (currentPage > 1) currentPage--;
            } else if (currentPage < $(".btnPage").length) currentPage++;
            $(".btnPage")
              .removeClass("activePage")
              .eq(currentPage - 1)
              .addClass("activePage");
          } else {
            $(".btnPage").removeClass("activePage");
            $(this).addClass("activePage");
            currentPage = $(this).data("page");
          }
          filterDevices();
        }
      });
    }
  });
}

//Contact stranica
if (url == "/contact.php") {
  $(document).ready(function () {
    //validacija za ime
    var regExpName = /^[A-Z][a-z]{2,}(\s[A-Z][a-z]{2,})*$/;
    var $tbName = $("#tbName");
    $tbName.blur(checkName);
    function checkName() {
      checkRegExp($tbName, regExpName);
    }

    //validacija za email
    var regExpEmail = /^[a-z][a-z0-9-_\.]{2,}@([a-z0-9-_]{2,}\.)+[a-z]{2,}$/;
    var $tbEmail = $("#tbEmail");
    $tbEmail.blur(checkEmail);
    function checkEmail() {
      checkRegExp($tbEmail, regExpEmail);
    }

    //validacija za poruku
    var $tbMessage = $("#tbMessage");
    function checkMessage() {
      var numberOfSpaces = tbMessage.value.replace(/[^\s]/gm, "").length;
      if (
        tbMessage.value.length - numberOfSpaces < 20 ||
        tbMessage.value.length > 500
      ) {
        fieldIncorrect($tbMessage);
      } else {
        fieldCorrect($tbMessage);
      }
    }
    $tbMessage.blur(checkMessage);

    // submitovanje forme
    var checkFunctions = [checkName, checkEmail, checkMessage];
    $("#btnSend").click(function (e) {
      submitForm(checkFunctions);
      if (noErrors) {
        let data = {
          email: $("#tbEmail").val(),
          name: $("#tbName").val(),
          message: $("#tbMessage").val(),
        };
        ajaxCallback(
          "assets/php/forms/contact-form-validation.php",
          "post",
          function (output) {
            clearForm($("#contactForm form"));
            openModal(output.response);
          },
          data
        );
      }
      e.preventDefault();
    });
  });
}
var noErrors;

function checkRegExp(field, regExp) {
  if (field.val().match(regExp)) fieldCorrect(field);
  else fieldIncorrect(field);
}

function fieldCorrect(field) {
  $(field).addClass("borderYellow");
  $(field).removeClass("borderRed");
  $(field).siblings(".errorMessage").slideUp();
}

function fieldIncorrect(field) {
  $(field).addClass("borderRed");
  $(field).removeClass("borderYellow");
  $(field).siblings(".errorMessage").slideDown();
  noErrors = false;
}

function fieldNeutral(field) {
  $(field).removeClass("borderRed");
  $(field).removeClass("borderYellow");
  $(field).siblings(".errorMessage").slideUp();
}

function submitForm(checkFunctions, form = false, message = false) {
  noErrors = true;
  for (var f of checkFunctions) {
    f();
  }
  if (noErrors) {
    if (form) clearForm(form);
    if (message) openModal(message);
  }
}

function clearForm(form) {
  $(form).find(".textField").val("").removeClass("borderYellow");
}

function openModal(message) {
  $("body").append(
    `<div class="successModal"><div class="cover"><div class="modalContent"><span class="font-small">${message}</span><button class="font-medium btnCloseModal"><i class="fas fa-times"></i></button></div></div></div>`
  );
  $(".successModal, .modalContent").hide();
  $(".successModal .cover, .btnCloseModal").click(closeModal);
  $(".modalContent").click(function (e) {
    e.stopPropagation();
  });
  $(".successModal").fadeIn("fast", function () {
    $(".modalContent").fadeIn("fast");
  });
}

function closeModal() {
  $(".modalContent").fadeOut("fast", function () {
    $(".successModal").fadeOut("fast", function () {
      $(".successModal").remove();
    });
  });
}

if (url == "/admin.php") {
  $(document).ready(function () {
    // SECTIONS
    printAdminSection("print-users.php");

    function printAdminSection(fileName) {
      ajaxCallback(`assets/php/admin/${fileName}`, "get", function (output) {
        $("#adminMain .container").html(output.response);
        addAdminEvents();
      });
    }

    $("#sideNavContent a").click(function (e) {
      e.preventDefault();
      closeSideNav();
      let href = $(this).attr("href");
      printAdminSection(href);
    });

    // BUTTONS
    function addAdminEvents() {
      // ADDING
      $(".btnAdminAdd").click(function () {
        let formFile = $(this).data("form");
        ajaxCallback(
          `assets/php/admin/adding/forms/${formFile}`,
          "get",
          function (output) {
            adminModal(output.response);
            addingEvents(formFile);
          }
        );
      });

      // adding events
      function addingEvents(formFile) {
        if (formFile == "add-user-form.php") {
          // username
          var regExpAddUserUsername = /^[a-zA-Z]\w{4,}$/;
          var $tbAddUserUsername = $("#tbAddUserUsername");
          $tbAddUserUsername.blur(checkAddUserUsername);
          function checkAddUserUsername() {
            checkRegExp($tbAddUserUsername, regExpAddUserUsername);
          }

          // email
          var regExpAddUserEmail =
            /^[a-z][a-z0-9-_\.]{2,}@([a-z0-9-_]{2,}\.)+[a-z]{2,}$/;
          var $tbAddUserEmail = $("#tbAddUserEmail");
          $tbAddUserEmail.blur(checkAddUserEmail);
          function checkAddUserEmail() {
            checkRegExp($tbAddUserEmail, regExpAddUserEmail);
          }

          // password
          var regExpAddUserPassword =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
          var $tbAddUserPassword = $("#tbAddUserPassword");
          $tbAddUserPassword.blur(checkAddUserPassword);
          function checkAddUserPassword() {
            checkRegExp($tbAddUserPassword, regExpAddUserPassword);
          }

          // form submition
          var checkAddUserFunctions = [
            checkAddUserEmail,
            checkAddUserPassword,
            checkAddUserUsername,
          ];
          $("#btnAddUser").click(function (e) {
            let printFile = $(".adminSection").data("print");
            submitForm(checkAddUserFunctions);
            if (noErrors) {
              ajaxCallback(
                "assets/php/admin/adding/add-user.php",
                "post",
                function () {
                  closeAdminModal();
                  printAdminSection(printFile);
                },
                {
                  username: $("#tbAddUserUsername").val(),
                  email: $("#tbAddUserEmail").val(),
                  password: $("#tbAddUserPassword").val(),
                  role: $("#ddlRole").val(),
                }
              );
            }
            e.preventDefault();
          });
        } else if (formFile == "add-device-form.php") {
          // name
          var regExpAddDeviceName = /^[A-Za-z0-9\/\-\s]+$/;
          var $tbAddDeviceName = $("#tbAddDeviceName");
          $tbAddDeviceName.blur(checkAddDeviceName);
          function checkAddDeviceName() {
            checkRegExp($tbAddDeviceName, regExpAddDeviceName);
          }

          // image
          var regExpAddDeviceImage = /^[\w\-]+(\.jpg|\.jpeg|\.png|\.gif)$/;
          var $tbAddDeviceImage = $("#tbAddDeviceImage");
          $tbAddDeviceImage.blur(checkAddDeviceImage);
          function checkAddDeviceImage() {
            checkRegExp($tbAddDeviceImage, regExpAddDeviceImage);
          }

          // price
          var regExpAddDevicePrice = /^[0-9]+$/;
          var $tbAddDevicePrice = $("#tbAddDevicePrice");
          $tbAddDevicePrice.blur(checkAddDevicePrice);
          function checkAddDevicePrice() {
            checkRegExp($tbAddDevicePrice, regExpAddDevicePrice);
          }

          // form submition
          var checkAddDeviceFunctions = [
            checkAddDeviceName,
            checkAddDeviceImage,
            checkAddDevicePrice,
          ];
          $("#btnAddDevice").click(function (e) {
            let printFile = $(".adminSection").data("print");
            submitForm(checkAddDeviceFunctions);
            if (noErrors) {
              ajaxCallback(
                "assets/php/admin/adding/add-device.php",
                "post",
                function () {
                  closeAdminModal();
                  printAdminSection(printFile);
                },
                {
                  name: $("#tbAddDeviceName").val().trim(),
                  image: $("#tbAddDeviceImage").val(),
                  os: $("#ddlOS").val(),
                  brand: $("#ddlBrand").val(),
                  price: $("#tbAddDevicePrice").val(),
                }
              );
            }
            e.preventDefault();
          });
        } else if (formFile == "add-brand-form.php") {
          // name
          var regExpAddBrandName = /^[A-Za-z\s]+$/;
          var $tbAddBrandName = $("#tbAddBrandName");
          $tbAddBrandName.blur(checkAddBrandName);
          function checkAddBrandName() {
            checkRegExp($tbAddBrandName, regExpAddBrandName);
          }

          // form submition
          var checkAddBrandFunctions = [checkAddBrandName];
          $("#btnAddBrand").click(function (e) {
            let printFile = $(".adminSection").data("print");
            submitForm(checkAddBrandFunctions);
            if (noErrors) {
              ajaxCallback(
                "assets/php/admin/adding/add-brand.php",
                "post",
                function () {
                  closeAdminModal();
                  printAdminSection(printFile);
                },
                {
                  name: $("#tbAddBrandName").val().trim(),
                }
              );
            }
            e.preventDefault();
          });
        } else if (formFile == "add-os-form.php") {
          // name
          var regExpAddOSName = /^[A-Za-z\s]+$/;
          var $tbAddOSName = $("#tbAddOSName");
          $tbAddOSName.blur(checkAddOSName);
          function checkAddOSName() {
            checkRegExp($tbAddOSName, regExpAddOSName);
          }

          // form submition
          var checkAddOSFunctions = [checkAddOSName];
          $("#btnAddOS").click(function (e) {
            let printFile = $(".adminSection").data("print");
            submitForm(checkAddOSFunctions);
            if (noErrors) {
              ajaxCallback(
                "assets/php/admin/adding/add-os.php",
                "post",
                function () {
                  closeAdminModal();
                  printAdminSection(printFile);
                },
                {
                  name: $("#tbAddOSName").val().trim(),
                }
              );
            }
            e.preventDefault();
          });
        }
      }

      // EDITING
      $(".btnEdit").click(function () {
        let formFile = $(this).parents(".adminSection").data("editform");
        let id = $(this).parents("tr").data("id");
        ajaxCallback(
          `assets/php/admin/editing/forms/${formFile}`,
          "post",
          function (output) {
            adminModal(output.response);
            editingEvents(formFile, id);
          },
          {
            id: id,
          }
        );
      });

      // editing events
      function editingEvents(formFile, id) {
        if (formFile == "edit-user-form.php") {
          // dropdown list values
          ajaxCallback(
            "assets/php/get-user-by-id.php",
            "post",
            function (output) {
              $("#ddlEditRole").val(output.role);
              $("#ddlEditActive").val(output.active);
            },
            {
              id: id,
            }
          );

          // username
          var regExpEditUserUsername = /^[a-zA-Z]\w{4,}$/;
          var $tbEditUserUsername = $("#tbEditUserUsername");
          $tbEditUserUsername.blur(checkEditUserUsername);
          function checkEditUserUsername() {
            checkRegExp($tbEditUserUsername, regExpEditUserUsername);
          }

          // email
          var regExpEditUserEmail =
            /^[a-z][a-z0-9-_\.]{2,}@([a-z0-9-_]{2,}\.)+[a-z]{2,}$/;
          var $tbEditUserEmail = $("#tbEditUserEmail");
          $tbEditUserEmail.blur(checkEditUserEmail);
          function checkEditUserEmail() {
            checkRegExp($tbEditUserEmail, regExpEditUserEmail);
          }

          // password
          $("#chbChangePassword").change(function () {
            if ($(this).is(":checked")) {
              $("#tbEditUserPassword").attr("disabled", false);
              checkRegExp($tbEditUserPassword, regExpEditUserPassword);
            } else {
              $("#tbEditUserPassword").attr("disabled", true);
              fieldNeutral($("#tbEditUserPassword"));
            }
          });

          var regExpEditUserPassword =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
          var $tbEditUserPassword = $("#tbEditUserPassword");
          $tbEditUserPassword.blur(checkEditUserPassword);
          function checkEditUserPassword() {
            if ($("#chbChangePassword").is(":checked")) {
              checkRegExp($tbEditUserPassword, regExpEditUserPassword);
            }
          }

          // form submition
          var checkEditUserFunctions = [
            checkEditUserEmail,
            checkEditUserPassword,
            checkEditUserUsername,
          ];
          $("#btnEditUser").click(function (e) {
            let printFile = $(".adminSection").data("print");
            submitForm(checkEditUserFunctions);
            if (noErrors) {
              ajaxCallback(
                "assets/php/admin/editing/edit-user.php",
                "post",
                function () {
                  closeAdminModal();
                  printAdminSection(printFile);
                },
                {
                  id: id,
                  username: $("#tbEditUserUsername").val(),
                  email: $("#tbEditUserEmail").val(),
                  password: $("#tbEditUserPassword").val(),
                  changePassword: Number(
                    $("#chbChangePassword").is(":checked")
                  ),
                  role: $("#ddlEditRole").val(),
                  active: $("#ddlEditActive").val(),
                }
              );
            }
            e.preventDefault();
          });
        } else if (formFile == "edit-device-form.php") {
          // dropdown list values
          ajaxCallback(
            "assets/php/get-device-by-id.php",
            "post",
            function (output) {
              $("#ddlEditOS").val(output.os);
              $("#ddlEditBrand").val(output.brand);
              $("#ddlEditDeviceActive").val(output.active);
            },
            {
              id: id,
            }
          );

          // name
          var regExpEditDeviceName = /^[A-Za-z0-9\/\-\s]+$/;
          var $tbEditDeviceName = $("#tbEditDeviceName");
          $tbEditDeviceName.blur(checkEditDeviceName);
          function checkEditDeviceName() {
            checkRegExp($tbEditDeviceName, regExpEditDeviceName);
          }

          // image
          var regExpEditDeviceImage = /^[\w\-]+(\.jpg|\.jpeg|\.png|\.gif)$/;
          var $tbEditDeviceImage = $("#tbEditDeviceImage");
          $tbEditDeviceImage.blur(checkEditDeviceImage);
          function checkEditDeviceImage() {
            checkRegExp($tbEditDeviceImage, regExpEditDeviceImage);
          }

          // price
          var regExpEditDevicePrice = /^[0-9]+$/;
          var $tbEditDevicePrice = $("#tbEditDevicePrice");
          $tbEditDevicePrice.blur(checkEditDevicePrice);
          function checkEditDevicePrice() {
            checkRegExp($tbEditDevicePrice, regExpEditDevicePrice);
          }

          // form submition
          var checkEditDeviceFunctions = [
            checkEditDeviceName,
            checkEditDeviceImage,
            checkEditDevicePrice,
          ];
          $("#btnEditDevice").click(function (e) {
            let printFile = $(".adminSection").data("print");
            submitForm(checkEditDeviceFunctions);
            if (noErrors) {
              ajaxCallback(
                "assets/php/admin/editing/edit-device.php",
                "post",
                function () {
                  closeAdminModal();
                  printAdminSection(printFile);
                },
                {
                  id: id,
                  name: $("#tbEditDeviceName").val().trim(),
                  image: $("#tbEditDeviceImage").val(),
                  os: $("#ddlEditOS").val(),
                  brand: $("#ddlEditBrand").val(),
                  price: $("#tbEditDevicePrice").val(),
                  active: $("#ddlEditDeviceActive").val(),
                }
              );
            }
            e.preventDefault();
          });
        } else if (formFile == "edit-brand-form.php") {
          // name
          var regExpEditBrandName = /^[A-Za-z\s]+$/;
          var $tbEditBrandName = $("#tbEditBrandName");
          $tbEditBrandName.blur(checkEditBrandName);
          function checkEditBrandName() {
            checkRegExp($tbEditBrandName, regExpEditBrandName);
          }

          // form submition
          var checkEditBrandFunctions = [checkEditBrandName];
          $("#btnEditBrand").click(function (e) {
            let printFile = $(".adminSection").data("print");
            submitForm(checkEditBrandFunctions);
            if (noErrors) {
              ajaxCallback(
                "assets/php/admin/editing/edit-brand.php",
                "post",
                function () {
                  closeAdminModal();
                  printAdminSection(printFile);
                },
                {
                  id: id,
                  name: $("#tbEditBrandName").val().trim(),
                }
              );
            }
            e.preventDefault();
          });
        } else if (formFile == "edit-os-form.php") {
          // name
          var regExpEditOSName = /^[A-Za-z\s]+$/;
          var $tbEditOSName = $("#tbEditOSName");
          $tbEditOSName.blur(checkEditOSName);
          function checkEditOSName() {
            checkRegExp($tbEditOSName, regExpEditOSName);
          }

          // form submition
          var checkEditOSFunctions = [checkEditOSName];
          $("#btnEditOS").click(function (e) {
            let printFile = $(".adminSection").data("print");
            submitForm(checkEditOSFunctions);
            if (noErrors) {
              ajaxCallback(
                "assets/php/admin/editing/edit-os.php",
                "post",
                function () {
                  closeAdminModal();
                  printAdminSection(printFile);
                },
                {
                  id: id,
                  name: $("#tbEditOSName").val().trim(),
                }
              );
            }
            e.preventDefault();
          });
        } else if (formFile == "edit-order-form.php") {
          // Buyer name
          var regExpEditOrderBuyerName =
            /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{2,})*$/;
          var $tbEditOrderBuyerName = $("#tbEditOrderBuyerName");
          $tbEditOrderBuyerName.blur(checkEditOrderBuyerName);
          function checkEditOrderBuyerName() {
            checkRegExp($tbEditOrderBuyerName, regExpEditOrderBuyerName);
          }

          // Buyer email
          var regExpEditOrderBuyerEmail =
            /^[a-z][a-z0-9\-_\.]{2,}@([a-z0-9\-_]{2,}\.)+[a-z]{2,}$/;
          var $tbEditOrderBuyerEmail = $("#tbEditOrderBuyerEmail");
          $tbEditOrderBuyerEmail.blur(checkEditOrderBuyerEmail);
          function checkEditOrderBuyerEmail() {
            checkRegExp($tbEditOrderBuyerEmail, regExpEditOrderBuyerEmail);
          }

          // Buyer address
          var regExpEditOrderBuyerAddress =
            /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,}(\s[A-ZŠĐČĆŽa-zšđčćž][a-zšđčćž]{2,})*\s\d+[A-Z]?(\/\d+)*$/;
          var $tbEditOrderBuyerAddress = $("#tbEditOrderBuyerAddress");
          $tbEditOrderBuyerAddress.blur(checkEditOrderBuyerAddress);
          function checkEditOrderBuyerAddress() {
            checkRegExp($tbEditOrderBuyerAddress, regExpEditOrderBuyerAddress);
          }

          // form submition
          var checkEditOrderFunctions = [
            checkEditOrderBuyerName,
            checkEditOrderBuyerEmail,
            checkEditOrderBuyerAddress,
          ];
          $("#btnEditOrder").click(function (e) {
            let printFile = $(".adminSection").data("print");
            submitForm(checkEditOrderFunctions);
            if (noErrors) {
              ajaxCallback(
                "assets/php/admin/editing/edit-order.php",
                "post",
                function () {
                  closeAdminModal();
                  printAdminSection(printFile);
                },
                {
                  id: id,
                  buyerName: $("#tbEditOrderBuyerName").val(),
                  buyerEmail: $("#tbEditOrderBuyerEmail").val(),
                  buyerAddress: $("#tbEditOrderBuyerAddress").val(),
                }
              );
            }
            e.preventDefault();
          });
        }
      }

      // DELETING
      $(".btnDelete").click(function () {
        let id;
        if ($(this).hasClass("btnDeleteMessage"))
          id = $(this).parents(".messageContainer").data("id");
        else id = $(this).parents("tr").data("id");
        let fileDelete = $(this).parents(".adminSection").data("delete");
        let filePrint = $(this).parents(".adminSection").data("print");
        openAreYouSureModal(function () {
          ajaxCallback(
            `assets/php/admin/deleting/${fileDelete}`,
            "post",
            function () {
              closeModal();
              printAdminSection(filePrint);
            },
            {
              id: id,
            }
          );
        });
      });
    }
  });

  // ARE YOU SURE MODAL
  function openAreYouSureModal(func) {
    $html =
      "<div class='areYouSure'><span class='font-small'>Are you sure?</span><span class='areYouSureButtons'><button class='btnYes btnPrimary'>Yes</button><button class='btnNo btnPrimary'>No</button></span></div>";
    openModal($html);
    $(".btnNo").click(closeModal);
    $(".btnYes").click(func);
  }

  // ADMIN MODAL
  function adminModal(content) {
    $("body").append(
      `<div class="adminModal"><div class="cover"><div class="adminModalContent">${content}<button class="font-medium btnCloseAdminModal"><i class="fas fa-times"></i></button></div></div></div>`
    );
    $(".adminModal, .adminModalContent").hide();
    $(".adminModal .cover, .btnCloseAdminModal").mousedown(closeAdminModal);
    $(".adminModalContent").mousedown(function (e) {
      e.stopPropagation();
    });
    $(".adminModal").fadeIn("fast", function () {
      $(".adminModalContent").fadeIn("fast");
    });
  }

  function closeAdminModal() {
    $(".adminModalContent").fadeOut("fast", function () {
      $(".adminModal").fadeOut("fast", function () {
        $(".adminModal").remove();
      });
    });
  }
}
if (url == "/cart.php") {
  $(document).ready(function () {
    // CART LIST
    function printCartDevices() {
      let cartDevices = loadLocalStorage("cart");
      $("#cartList tbody").html("");
      for (let i in cartDevices) {
        var currentDevice = cartDevices[i];
        $("#cartList tbody").append(
          `<tr data-id="${currentDevice.id}" class="cartItem"><td class="colDeviceName">${currentDevice.name}</td><td class="colPrice">${currentDevice.price}€</td><td class="colQuantity"><button class="btnPrimary btnQuantity btnDecrease"><span>-</span></button><span class="quantity">${currentDevice.quantity}</span><button class="btnPrimary btnQuantity btnIncrease"><span>+</span></button></td><td class="colRemove"><button class="btnRemove"><i class="fas fa-minus"></i></button></td></tr>`
        );
      }
    }

    printCartDevices();

    // BUTTON QUANTITY
    $(".btnQuantity").click(function () {
      let cartDevices = loadLocalStorage("cart");
      var deviceId = parseInt($(this).parents("tr").data("id"));
      var index;
      for (let i in cartDevices) {
        if (deviceId == cartDevices[i].id) {
          index = i;
          break;
        }
      }
      if ($(this).hasClass("btnIncrease")) {
        if (cartDevices[index].quantity < 10) {
          cartDevices[index].quantity++;
          updateLocalStorage(cartDevices, "cart");
        }
      } else {
        if (cartDevices[index].quantity > 1) {
          cartDevices[index].quantity--;
          updateLocalStorage(cartDevices, "cart");
        }
      }
      $(this).siblings(".quantity").html(cartDevices[index].quantity);
      printCartNumber();
      printTotalPrice();
    });

    // BUTTON REMOVE
    $(".btnRemove").click(function () {
      let cartDevices = loadLocalStorage("cart");
      var deviceId = parseInt($(this).parents("tr").data("id"));
      for (let i in cartDevices) {
        if (cartDevices[i].id == deviceId) {
          removeDevice(i);
          break;
        }
      }
      printCartNumber();
      printTotalPrice();
      $(this).parents("tr").remove();
    });

    function removeDevice(index) {
      let cartDevices = loadLocalStorage("cart");
      cartDevices.splice(index, 1);
      updateLocalStorage(cartDevices, "cart");
    }

    // TOTAL PRICE
    var totalPrice;
    function printTotalPrice() {
      let cartDevices = loadLocalStorage("cart");
      totalPrice = 0;
      for (let i in cartDevices)
        totalPrice += cartDevices[i].price * cartDevices[i].quantity;
      $("#totalPrice")
        .html(`Total Price: <span class="bold">${totalPrice}€</span>`)
        .attr("data-price", totalPrice);
    }

    printTotalPrice();

    //ime
    var regExpName = /^[A-ZŠĐČĆŽ][a-zšđčćž]{2,}(\s[A-ZŠĐČĆŽ][a-zšđčćž]{2,})+$/;
    var $tbName = $("#tbName");
    $tbName.blur(checkName);
    function checkName() {
      checkRegExp($tbName, regExpName);
    }

    //  mail
    var regExpEmail = /^[a-z][a-z0-9-_\.]{2,}@([a-z0-9-_]{2,}\.)+[a-z]{2,}$/;
    var $tbEmail = $("#tbEmail");
    $tbEmail.blur(checkEmail);
    function checkEmail() {
      checkRegExp($tbEmail, regExpEmail);
    }

    // adresa
    var regExpAddress =
      /^[A-Z][a-z]{2,}(\s[A-Za-z][a-zšđčćž]{2,})*\s\d+[A-Z]?(\/\d+)*$/;
    var $tbAddress = $("#tbAddress");
    $tbAddress.blur(checkAddress);
    function checkAddress() {
      checkRegExp($tbAddress, regExpAddress);
    }

    // CHECKOUT BUTTON
    var checkFunctions = [checkName, checkEmail, checkAddress];
    $("#btnCheckout").click(function () {
      if ($(".cartItem").length != 0) {
        submitForm(checkFunctions);
        if (noErrors) {
          ajaxCallback(
            "assets/php/forms/checkout-form-validation.php",
            "post",
            function (output) {
              openModal(output.response);
              emptyCart();
              clearForm($("#checkout form"));
            },
            {
              name: $("#tbName").val(),
              email: $("#tbEmail").val(),
              address: $("#tbAddress").val(),
              totalPrice: $("#totalPrice").data("price"),
              details: loadLocalStorage("cart"),
            }
          );
        }
      } else openModal("Your cart is empty!");
    });

    function emptyCart() {
      updateLocalStorage([], "cart");
      printCartDevices();
      printTotalPrice();
      printCartNumber();
    }
  });
}
