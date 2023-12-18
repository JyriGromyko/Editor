function rangat__navigation(arg) {
  levyt = canvas.querySelectorAll(".levy");
  rangat_alayer = canvas.querySelectorAll(".l2a");
  rangat_blayer = canvas.querySelectorAll(".l2b");
  listat__grandrow = canvas.querySelector(".listat__grandrow");

  
  if (document.querySelector("#rangoitus__lvl_one").checked) {
    for (var i = 0; i < levyt.length; i++) {
      levyt[i].classList.remove("six_hidden");
    }
    if (listat__grandrow) {
      listat__grandrow.classList.remove("six_hidden");
    }
  }
  else {
    for (var i = 0; i < levyt.length; i++) {
      levyt[i].classList.add("six_hidden");
    }
    if (listat__grandrow) {
      listat__grandrow.classList.add("six_hidden");
    }
  }
  if (document.querySelector("#rangoitus__lvl_two").checked) {
    for (var i = 0; i < rangat_alayer.length; i++) {
      rangat_alayer[i].classList.remove("six_hidden");
    }
  }
  else {
    for (var i = 0; i < rangat_alayer.length; i++) {
      rangat_alayer[i].classList.add("six_hidden");
    }
  }

  if (document.querySelector("#rangoitus__lvl_three").checked) {
    for (var i = 0; i < rangat_blayer.length; i++) {
      rangat_blayer[i].classList.remove("six_hidden");
    }
  }
  else {
    for (var i = 0; i < rangat_blayer.length; i++) {
      rangat_blayer[i].classList.add("six_hidden");
    }
  }

  if(arg === false) {
    for (var i = 0; i < levyt.length; i++) {
      levyt[i].classList.remove("six_hidden");
    }
    if (listat__grandrow) {
      listat__grandrow.classList.remove("six_hidden");
    }
    for (var i = 0; i < rangat_alayer.length; i++) {
      rangat_alayer[i].classList.remove("six_hidden");
    }
    for (var i = 0; i < rangat_blayer.length; i++) {
      rangat_blayer[i].classList.remove("six_hidden");
    }
  }
}


function rangoita() {
  po_c = "#fedb00";
  pv_c = "#fedb00";
  ar_c = "#9c00fe";
  yr_c = "#9c00fe";
  sr = "#ed0000";
  vr_xc="#0040fe";
  vr_yc="#00b5fe";

  

  h = parseFloat(document.querySelector("#box_h").value);
  w = parseFloat(document.querySelector("#box_w").value);
  tyostot__tyosto_pysty = canvas.querySelectorAll(".levy_tyostot_x > div");
  tyostot__tyosto_vaaka = canvas.querySelectorAll(".levy_tyostot_y > div");
  verticalrow_saumat = canvas.querySelectorAll(".sauma__vertical_ctrldown");
  horizontalrow_saumat = canvas.querySelectorAll(".sauma__horizontal_ctrldown");
  td_p = [];
  td_v = [];

  
  first_excel = document.querySelector("#drawscreen_section_six > section.ranka_excel > table > tbody > tr");

  for (var i = tyostot__tyosto_pysty.length - 1; i >= 0; i--) {
    if (tyostot__tyosto_pysty[i].querySelector("input.x_cord")) {
      if (tyostot__tyosto_pysty[i].classList.contains("no_siirto") !== true) {
        d_c = tyostot__tyosto_pysty[i].querySelector("input.x_cord").value;
        lc = parseFloat(tyostot__tyosto_pysty[i].parentElement.parentElement.style.left) + parseFloat(tyostot__tyosto_pysty[i].style.left);
        t_p_array = lc + "," + parseFloat(d_c) + "," + tyostot__tyosto_pysty[i].innerHTML;
        td_p.push(t_p_array);
      }
    }
    else {}
  }
  for (var i = tyostot__tyosto_vaaka.length - 1; i >= 0; i--) {
    if (tyostot__tyosto_vaaka[i].classList.contains("no_siirto") !== true) {
      bc = parseFloat(tyostot__tyosto_vaaka[i].parentElement.parentElement.style.bottom) + parseFloat(tyostot__tyosto_vaaka[i].style.bottom);
      t_v_array = bc + "," + parseFloat(bc) + "," + tyostot__tyosto_vaaka[i].innerHTML;
      td_v.push(t_v_array);
    }
  }
  td_p.sort(function(a, b) {
    if (a.split(",")[0] > b.split(",")[0]) return 1;
    if (a.split(",")[0] < b.split(",")[0]) return -1;
    return 0;
  });
  td_v.sort(function(a, b) {
    if (a.split(",")[0] > b.split(",")[0]) return 1;
    if (a.split(",")[0] < b.split(",")[0]) return -1;
    return 0;
  });

  function removeDupleTyosto(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  t_p = removeDupleTyosto(td_p);
  t_v = removeDupleTyosto(td_v);
  for (var i = tyostot__tyosto_pysty.length - 1; i >= 0; i--) {
    tyostot__tyosto_pysty[i].style.opacity = 0;
  }
  for (var i = tyostot__tyosto_vaaka.length - 1; i >= 0; i--) {
    tyostot__tyosto_vaaka[i].style.opacity = 0;
  }
  var tyostot;
  if (document.querySelector(".rangat__grandrow")) {
    tyostot = document.querySelector(".rangat__grandrow");
    document.querySelector(".rangat__grandrow").innerHTML="";
  }
  else {
    tyostot = document.createElement("div");
    tyostot.classList.add("rangat__grandrow");
    canvas.prepend(tyostot);
  }
  pv = 0;
  vs_array_summ = 0;
  hs_array_summ = 0;
  alkuranka_pysty = document.createElement("div");
  alkuranka_pysty.classList.add("ranka");
  alkuranka_pysty.classList.add("ranka_unconfirmed");
  alkuranka_pysty.classList.add("ranka_pysty");
  alkuranka_pysty.classList.add("alkuranka_pysty");
  alkuranka_pysty.classList.add("erikoisranka");
  alkuranka_pysty.style.left = "0" + "px";
  tyostot.prepend(alkuranka_pysty);
  alkuranka_vaaka = document.createElement("div");
  alkuranka_vaaka.classList.add("ranka");
  alkuranka_vaaka.classList.add("ranka_unconfirmed");
  alkuranka_vaaka.classList.add("ranka_vaaka");
  alkuranka_vaaka.classList.add("alkuranka_vaaka");
  alkuranka_vaaka.classList.add("erikoisranka");
  alkuranka_vaaka.style.bottom = "0" + "px";
  tyostot.prepend(alkuranka_vaaka);
  soma = canvas.querySelectorAll(".sauma");
  for (var i = soma.length - 1; i >= 0; i--) {
    soma[i].classList.add("deformed");
    saumaranka = soma[i].cloneNode(true);
    saumaranka.innerHTML = "";
    soma[i].classList.add("non-existent");
    if (parseFloat(soma[i].style.left) == w / 5 || parseFloat(soma[i].style.bottom) == h / 5) {
      soma[i].classList.add("non-existent");
      continue
    }
    saumaranka.style.zIndex = 9;
    if (soma[i].classList.contains("sauma__vertical") === true) {
      soma_left = parseFloat(soma[i].style.left);
      saumaranka.style.left = (soma_left) + "px";
      saumaranka.classList.add("ranka");
      saumaranka.classList.add("ranka_unconfirmed");
      saumaranka.classList.add("ranka_pysty");
      saumaranka.classList.add("saumaranka");
    }
    if (soma[i].classList.contains("sauma__horizontal") === true) {
      soma_bottom = parseFloat(soma[i].style.bottom);
      saumaranka.style.bottom = (soma_bottom) + "px";
      saumaranka.classList.add("ranka");
      saumaranka.classList.add("ranka_unconfirmed");
      saumaranka.classList.add("ranka_vaaka");
      saumaranka.classList.add("saumaranka");
    }
    tyostot.append(saumaranka);
  }
  vs_array_down = [];
  hs_array_down = [];
  for (var i = 0; i < verticalrow_saumat.length; i++) {
    vs_array_down.push(parseFloat(verticalrow_saumat[i].innerText));
  }
  for (var i = 0; i < horizontalrow_saumat.length; i++) {
    hs_array_down.push(parseFloat(horizontalrow_saumat[i].innerText));
  }
  // vs_array_down
  // hs_array_down
  // for (var i = t_p.length - 1; i >= 0; i--) {
  //   Things[i]
  // }

  levy_tyostot = canvas.querySelectorAll('.tyostot__tyosto:not(.no_siirto) .secondcord');
  valiranka_array_vaaka = [];
  valiranka_array_pysty = [];
  tyostot_ = levy_tyostot;
  for (let c = 0; c < tyostot_.length; c++) {
    if(tyostot_[c].parentElement.classList.contains('.no_siirto')) {
      tyostot_[c].parentElement.style.opacity = 0;
    }
    else {
      tyostot_[c].parentElement.style.opacity = 0;
      if(tyostot_[c].parentElement.classList.contains('tyostot__tyosto_pysty')) {
        valiranka_array_pysty.push(tyostot_[c].parentElement);
      }
      else if(tyostot_[c].parentElement.classList.contains('tyostot__tyosto_vaaka')) {
        valiranka_array_vaaka.push(tyostot_[c].parentElement);
      }
    }
  }
  for (var i = valiranka_array_pysty.length - 1; i >= 0; i--) {
    tyosto = document.createElement("div");
    tyosto.classList.add("ranka");
    tyosto.classList.add("ranka_unconfirmed");
    tyosto.classList.add("valiranka");
    tyosto.classList.add("ranka_pysty");
    tyosto.style.left = parseFloat(valiranka_array_pysty[i].style.left) + parseFloat(valiranka_array_pysty[i].parentElement.parentElement.style.left) + "px";
    // tyosto.innerHTML = parseFloat(t_p[i].split(",")[0])-parseFloat(canvas.getBoundingClientRect().left);
    tyostot.append(tyosto);
  }
  for (var i = valiranka_array_vaaka.length - 1; i >= 0; i--) {
    tyosto = document.createElement("div");
    tyosto.classList.add("ranka_unconfirmed");
    tyosto.classList.add("ranka");
    tyosto.classList.add("valiranka");
    tyosto.classList.add("ranka_vaaka");
    tyosto.style.bottom = parseFloat(valiranka_array_vaaka[i].style.bottom) + parseFloat(valiranka_array_pysty[i].parentElement.parentElement.style.bottom) + "px";
    // tyosto.innerHTML = parseFloat(t_p[i].split(",")[0])-parseFloat(canvas.getBoundingClientRect().left);
    tyostot.append(tyosto);
  }
  aukot = canvas.querySelectorAll(".aukko");
  for (var i = 0; i < aukot.length; i++) {
    if (aukot[i].classList.contains("ikkuna")) {
      irv = document.createElement("div");
      iro = document.createElement("div");
      ira = document.createElement("div");
      iry = document.createElement("div");
      irv.classList.add("ranka");
      irv.classList.add("ranka_pysty");
      irv.classList.add("ikkunaranka");
      irv.classList.add("ikkunaranka_irv");
      irv.dataset.name = "ikkunaranka_irv";
      iro.classList.add("ranka");
      iro.classList.add("ranka_pysty");
      iro.classList.add("ikkunaranka");
      iro.classList.add("ikkunaranka_iro");
      iro.dataset.name = "ikkunaranka_iro";
      ira.classList.add("ranka");
      ira.classList.add("ranka_vaaka");
      ira.classList.add("ikkunaranka");
      ira.classList.add("ikkunaranka_ira");
      ira.dataset.name = "ikkunaranka_ira";
      iry.classList.add("ranka");
      iry.classList.add("ranka_vaaka");
      iry.classList.add("ikkunaranka");
      iry.classList.add("ikkunaranka_iry");
      iry.dataset.name = "ikkunaranka_iry";
      a_leftcord = roundToNearest25(parseFloat(aukot[i].style.left));
      a_rightcord = roundToNearest25(parseFloat(aukot[i].style.width) + parseFloat(aukot[i].style.left));
      a_bottomcord = roundToNearest25(parseFloat(aukot[i].style.bottom));
      a_topcord = roundToNearest25(parseFloat(aukot[i].style.height) + parseFloat(aukot[i].style.bottom));
      irv.style.left = a_leftcord + "px";
      iro.style.left = a_rightcord + "px";
      ira.style.bottom = a_bottomcord + "px";
      iry.style.bottom = a_topcord + "px";
      tyostot.append(irv);
      tyostot.append(iro);
      tyostot.append(ira);
      tyostot.append(iry);
    }
  }
  viimranka_pysty = document.createElement("div");
  viimranka_pysty.classList.add("ranka");
  viimranka_pysty.classList.add("ranka_unconfirmed");
  viimranka_pysty.classList.add("ranka_pysty");
  viimranka_pysty.classList.add("viimranka_pysty");
  viimranka_pysty.classList.add("erikoisranka");

  viimranka_pysty.style.left = roundToNearest25(w - 2.5) / 5 + "px";
  tyostot.append(viimranka_pysty);
  viimranka_vaaka = document.createElement("div");
  viimranka_vaaka.classList.add("ranka");
  viimranka_vaaka.classList.add("ranka_unconfirmed");
  viimranka_vaaka.classList.add("ranka_vaaka");
  viimranka_vaaka.classList.add("viimranka_vaaka");
  viimranka_vaaka.classList.add("erikoisranka");

  viimranka_vaaka.style.bottom = roundToNearest25(h - 2.5) / 5 + "px";
  tyostot.append(viimranka_vaaka);
  document.querySelector(".saumat__grandrow").style.opacity = 0;
  trow = tyostot;
  fixrangat();
  rangat__initializesettings();

  rangat__setcord();
  
  create__ranka__asexcel();
  create__ranka__tuoexcel();
}

function fixrangat() {
  rangat = canvas.querySelectorAll(".rangat__grandrow > .ranka");
  // Delete double ranka X, Y after
  leftCoordinates = [];
  bottomCoordinates = [];
  for (var i = rangat.length - 1; i >= 0; i--) {
    if (rangat[i].classList.contains("ranka_pysty") === true) {
      left = parseFloat(rangat[i].style.left);
      if (leftCoordinates.includes(left)) {
        console.log(rangat[i]);
        rangat[i].remove();
      }
      else {
        leftCoordinates.push(left);
        continue
      }
    }
    else if (rangat[i].classList.contains("ranka_vaaka") === true) {
      bottom = parseFloat(rangat[i].style.bottom);
      if (bottomCoordinates.includes(bottom)) {
        console.log(rangat[i]);
        rangat[i].remove();
      }
      else {
        bottomCoordinates.push(bottom);
        continue
      }
    }
  }
  // Delete complete!
  // Now, arrange left from smallest to largest left, then bottom from smallest to largest bototm
  rangat = canvas.querySelectorAll(".rangat__grandrow > .ranka");
  rangat_pysty = canvas.querySelectorAll(".rangat__grandrow > .ranka_pysty");
  rangat_vaaka = canvas.querySelectorAll(".rangat__grandrow > .ranka_vaaka");
  for (var i = rangat.length - 1; i >= 0; i--) {
    rangat[i].remove();
  }
  sortedrangat_pysty = Array.from(rangat_pysty).sort((a, b) => {
    const leftA = parseInt(a.style.left);
    const leftB = parseInt(b.style.left);
    return leftA - leftB;
  });
  sortedrangat_vaaka = Array.from(rangat_vaaka).sort((a, b) => {
    const bottomA = parseInt(a.style.bottom);
    const bottomB = parseInt(b.style.bottom);
    return bottomA - bottomB;
  });
  tyostot = document.querySelector(".rangat__grandrow");
  for (var i = 0; i < sortedrangat_pysty.length; i++) {
    tyostot.append(sortedrangat_pysty[i]);
  }
  for (var i = 0; i < sortedrangat_vaaka.length; i++) {
    tyostot.append(sortedrangat_vaaka[i]);
  }
}

function rangat__initializesettings() {
  rangat = canvas.querySelectorAll(".rangat__grandrow > div");
  s_rankaonsettings = document.querySelectorAll(".rankalista_as .s_rangat input:checked");


  ranka_sarray = [];
  s_rankaonsettings.forEach(s => {
    if(ranka_sarray.includes(s.parentElement.parentElement.parentElement) === false) {
      ranka_sarray.push(s.parentElement.parentElement.parentElement);
    }
  });


  ranka_sarray.forEach(s => {
    trs = s.querySelectorAll("tr:not(.headingrow)");
    if(s.classList.contains("l2a_table_pysty")) {
      layer ="l2a";
      for (let a = 0; a < trs.length; a++) {
        settingvalue = trs[a].querySelector("td:nth-child(2) input");

        setval = settingvalue.value.toLowerCase().replaceAll(" ","");
        if(setval == "saumaranka") {
          tomod = canvas.querySelectorAll(".ranka_pysty.saumaranka");
          
        }
        if(setval == "väliranka") {
          tomod = canvas.querySelectorAll(".ranka_pysty.valiranka");
        }
        if(setval == "alueenalareuna") {
          tomod = [];
        }
        if(setval == "alueenyläreuna") {
          tomod = [];
        }
        if(setval == "alueenvasenreuna") {
          tomod = canvas.querySelectorAll(".ranka_pysty.alkuranka_pysty");
        }
        if(setval == "alueenoikeareuna") {
          tomod = canvas.querySelectorAll(".ranka_pysty.viimranka_pysty");
        }

        for (let b = 0; b < tomod.length; b++) {
          tomod[b].classList.remove("ranka_unconfirmed");
          tomod[b].classList.add(layer);
          tomod[b].dataset.name	= trs[a].querySelector("td:nth-child(2) input").value;
          tomod[b].dataset.rangan_koodin_alku	= trs[a].querySelector("td:nth-child(3) input").value;
          tomod[b].dataset.tilauskoodi = trs[a].querySelector("td:nth-child(4) input").value;
          tomod[b].dataset.materiaali	= trs[a].querySelector("td:nth-child(5) input").value;
          tomod[b].dataset.paksuus	= trs[a].querySelector("td:nth-child(6) input").value;
          tomod[b].dataset.laatu	= trs[a].querySelector("td:nth-child(7) input").value;
          tomod[b].dataset.vari_nimi	= trs[a].querySelector("td:nth-child(8) input").value;
          tomod[b].dataset.ncs_code	= trs[a].querySelector("td:nth-child(9) input").value;
          tomod[b].dataset.suunta	= trs[a].querySelector("td:nth-child(10) input").value;
          tomod[b].dataset.lisaa_poista_mitasta	= trs[a].querySelector("td:nth-child(11) input").value;
          tomod[b].dataset.vahenna_mista	= trs[a].querySelector("td:nth-child(12) input").value;
        }
      }
    }

    else if(s.classList.contains("l2a_table_vaaka")) {
      layer ="l2a";
      for (let a = 0; a < trs.length; a++) {
        settingvalue = trs[a].querySelector("td:nth-child(2) input");

        setval = settingvalue.value.toLowerCase().replaceAll(" ","");
        if(setval == "saumaranka") {
          tomod = canvas.querySelectorAll(".ranka_vaaka.saumaranka");     
        }
        if(setval == "väliranka") {
          tomod = canvas.querySelectorAll(".ranka_vaaka.valiranka");
        }
        if(setval == "alueenalareuna") {
          tomod = canvas.querySelectorAll(".ranka_vaaka.alkuranka_vaaka");
        }
        if(setval == "alueenyläreuna") {
          tomod = canvas.querySelectorAll(".ranka_vaaka.viimranka_vaaka");
        }
        
        for (let b = 0; b < tomod.length; b++) {
          tomod[b].classList.remove("ranka_unconfirmed");
          tomod[b].classList.add(layer);
          tomod[b].dataset.name	= trs[a].querySelector("td:nth-child(2) input").value;
          tomod[b].dataset.rangan_koodin_alku	= trs[a].querySelector("td:nth-child(3) input").value;
          tomod[b].dataset.tilauskoodi = trs[a].querySelector("td:nth-child(4) input").value;
          tomod[b].dataset.materiaali	= trs[a].querySelector("td:nth-child(5) input").value;
          tomod[b].dataset.paksuus	= trs[a].querySelector("td:nth-child(6) input").value;
          tomod[b].dataset.laatu	= trs[a].querySelector("td:nth-child(7) input").value;
          tomod[b].dataset.vari_nimi	= trs[a].querySelector("td:nth-child(8) input").value;
          tomod[b].dataset.ncs_code	= trs[a].querySelector("td:nth-child(9) input").value;
          tomod[b].dataset.suunta	= trs[a].querySelector("td:nth-child(10) input").value;
          tomod[b].dataset.lisaa_poista_mitasta	= trs[a].querySelector("td:nth-child(11) input").value;
          tomod[b].dataset.vahenna_mista	= trs[a].querySelector("td:nth-child(12) input").value;
        }
      }
    }

    if(s.classList.contains("l2b_table_pysty")) {
      layer ="l2b";
      for (let a = 0; a < trs.length; a++) {
        settingvalue = trs[a].querySelector("td:nth-child(2) input");

        setval = settingvalue.value.toLowerCase().replaceAll(" ","");
        if(setval == "saumaranka") {
          tomod = canvas.querySelectorAll(".ranka_pysty.saumaranka");
          
        }
        if(setval == "väliranka") {
          tomod = canvas.querySelectorAll(".ranka_pysty.valiranka");
        }
        if(setval == "alueenalareuna") {
          tomod = [];
        }
        if(setval == "alueenyläreuna") {
          tomod = [];
        }
        if(setval == "alueenvasenreuna") {
          tomod = canvas.querySelectorAll(".ranka_pysty.alkuranka_pysty");
        }
        if(setval == "alueenoikeareuna") {
          tomod = canvas.querySelectorAll(".ranka_pysty.viimranka_pysty");
        }

        for (let b = 0; b < tomod.length; b++) {
          tomod[b].classList.remove("ranka_unconfirmed");
          tomod[b].classList.add(layer);
          tomod[b].dataset.name	= trs[a].querySelector("td:nth-child(2) input").value;
          tomod[b].dataset.rangan_koodin_alku	= trs[a].querySelector("td:nth-child(3) input").value;
          tomod[b].dataset.tilauskoodi = trs[a].querySelector("td:nth-child(4) input").value;
          tomod[b].dataset.materiaali	= trs[a].querySelector("td:nth-child(5) input").value;
          tomod[b].dataset.paksuus	= trs[a].querySelector("td:nth-child(6) input").value;
          tomod[b].dataset.laatu	= trs[a].querySelector("td:nth-child(7) input").value;
          tomod[b].dataset.vari_nimi	= trs[a].querySelector("td:nth-child(8) input").value;
          tomod[b].dataset.ncs_code	= trs[a].querySelector("td:nth-child(9) input").value;
          tomod[b].dataset.suunta	= trs[a].querySelector("td:nth-child(10) input").value;
          tomod[b].dataset.lisaa_poista_mitasta	= trs[a].querySelector("td:nth-child(11) input").value;
          tomod[b].dataset.vahenna_mista	= trs[a].querySelector("td:nth-child(12) input").value;
        }
      }
    }

    else if(s.classList.contains("l2b_table_vaaka")) {
      layer ="l2b";
      for (let a = 0; a < trs.length; a++) {
        settingvalue = trs[a].querySelector("td:nth-child(2) input");

        setval = settingvalue.value.toLowerCase().replaceAll(" ","");
        if(setval == "saumaranka") {
          tomod = canvas.querySelectorAll(".ranka_vaaka.saumaranka");     
        }
        if(setval == "väliranka") {
          tomod = canvas.querySelectorAll(".ranka_vaaka.valiranka");
        }
        if(setval == "alueenalareuna") {
          tomod = canvas.querySelectorAll(".ranka_vaaka.alkuranka_vaaka");
        }
        if(setval == "alueenyläreuna") {
          tomod = canvas.querySelectorAll(".ranka_vaaka.viimranka_vaaka");
        }
        
        for (let b = 0; b < tomod.length; b++) {
          tomod[b].classList.remove("ranka_unconfirmed");
          tomod[b].classList.add(layer);
          tomod[b].dataset.name	= trs[a].querySelector("td:nth-child(2) input").value;
          tomod[b].dataset.rangan_koodin_alku	= trs[a].querySelector("td:nth-child(3) input").value;
          tomod[b].dataset.tilauskoodi = trs[a].querySelector("td:nth-child(4) input").value;
          tomod[b].dataset.materiaali	= trs[a].querySelector("td:nth-child(5) input").value;
          tomod[b].dataset.paksuus	= trs[a].querySelector("td:nth-child(6) input").value;
          tomod[b].dataset.laatu	= trs[a].querySelector("td:nth-child(7) input").value;
          tomod[b].dataset.vari_nimi	= trs[a].querySelector("td:nth-child(8) input").value;
          tomod[b].dataset.ncs_code	= trs[a].querySelector("td:nth-child(9) input").value;
          tomod[b].dataset.suunta	= trs[a].querySelector("td:nth-child(10) input").value;
          tomod[b].dataset.lisaa_poista_mitasta	= trs[a].querySelector("td:nth-child(11) input").value;
          tomod[b].dataset.vahenna_mista	= trs[a].querySelector("td:nth-child(12) input").value;
        }
      }
    }
  });


  unnecessary_rangat = canvas.querySelectorAll(".ranka_unconfirmed");
  unnecessary_rangat.forEach(todelete => {
    todelete.remove();
  });

  // Update array we're working with!
  rangat = canvas.querySelectorAll(".rangat__grandrow > .ranka");
}

function rangat__setcord() {
  r_bottomsumm = 0;
  r_leftsumm = 0;

  if(document.querySelector(".valiranka_module .ranka_selitykset")) {

  }
  else {
    x = document.createElement("div");
    x.classList = ["ranka_selitykset"];

    x.innerHTML = `
      <div>PO=<b style="color:${po_c};">Pääte Oikea</b></div>
      <div>PV=<b style="color:${pv_c};">Pääte Vasen</b></div>
      <div>AR=<b style="color:${ar_c};">Alaranka</b></div>
      <div>YR=<b style="color:${yr_c};">Yläranka</b></div>
      <div>SR=<b style="color:${sr};">Saumaranka</b></div>
      <div>L2A V=<b style="color:${vr_yc};">L2A Väliranka</b></div>
      <div>L2B V=<b style="color:${vr_xc};">L2B Väliranka</b></div>
    `;

    document.querySelector(".valiranka_module").appendChild(x);

  }
  for (var i = 0; i < rangat.length; i++) {
    if (rangat[i].classList.contains("ranka_pysty") === true) {
      left = parseFloat(rangat[i].style.left);
      r_cur_left = left - r_leftsumm;
      r_cur_leftinput = r_cur_left * 5;
      r_leftsumm += r_cur_left;
    }
    else if (rangat[i].classList.contains("ranka_vaaka") === true) {
      bottom = parseFloat(rangat[i].style.bottom);
      r_cur_bottom = bottom - r_bottomsumm;
      r_cur_bottominput = r_cur_bottom * 5;
      
      r_bottomsumm += r_cur_bottom;
    }
    
    r_type = rangat[i].dataset.rangan_koodin_alku;
    try {
       r_mittamuutos = rangat[i].dataset.lisaa_poista_mitasta.replaceAll(" ","").toLowerCase();
    } catch (error) {
      console.log(error);
      console.log(rangat[i]);
      r_mittamuutos = parseFloat(rangat[i].dataset.lisaa_poista_mitasta);
    }

    try {
      r_vahenna_mista = rangat[i].dataset.vahenna_mista.replaceAll(" ","").toLowerCase();
    } catch (error) {
      console.log(error);
      console.log(rangat[i]);
      r_vahenna_mista = parseFloat(rangat[i].dataset.vahenna_mista);
    }
    

    if(rangat[i].classList.contains("ranka_pysty") === true) {
      if(r_mittamuutos === "vähennäsauma") {
        correct_measure = (parseFloat(rangat[i].offsetHeight)*5-saumaset_vm);
      }
      else {
        correct_measure = (parseFloat(rangat[i].offsetHeight)*5 + parseFloat(r_mittamuutos));
      }
    }
    else if(rangat[i].classList.contains("ranka_vaaka") === true) {
      if(r_mittamuutos === "vähennäsauma") {
        correct_measure = (parseFloat(rangat[i].offsetWidth)*5-saumaset_vm);
      }
      else {
        correct_measure = (parseFloat(rangat[i].offsetWidth)*5 + parseFloat(r_mittamuutos));
      }
    }

    if (rangat[i].classList.contains("alkuranka_pysty") === true) { 
      rangat[i].innerHTML = '<input value='+r_type+' type="text" class="ranka_cord ranka_type"><div type="text" style="margin-top: '+parseFloat(rangat[i].offsetHeight)+'px" class="ranka_cord" >'+correct_measure+'</div><div class="ranka_secondcord" style="margin-top: '+parseFloat(rangat[i].offsetHeight)+'px">'+parseFloat(rangat[i].style.left)*5+'</div>';
      rangat[i].style.background = pv_c;
    }
    else if (rangat[i].classList.contains("viimranka_pysty") === true) {
      rangat[i].innerHTML = '<input value='+r_type+' type="text" class="ranka_cord ranka_type"><div type="text" style="margin-top: '+parseFloat(rangat[i].offsetHeight)+'px" class="ranka_cord" >'+correct_measure+'</div><div class="ranka_secondcord" style="margin-top: '+parseFloat(rangat[i].offsetHeight)+'px">'+parseFloat(rangat[i].style.left)*5+'</div>';
      rangat[i].style.background = po_c;
    }
    else if (rangat[i].classList.contains("alkuranka_vaaka") === true) {
      rangat[i].innerHTML = '<input value='+r_type+' type="text" class="ranka_cord ranka_type"><div type="text" class="ranka_cord" style="margin-right: '+correct_measure/5+'px">'+correct_measure+'</div><div class="ranka_secondcord">'+parseFloat(rangat[i].style.bottom)*5+'</div>';
      rangat[i].style.background = ar_c;
    }
    else if (rangat[i].classList.contains("viimranka_vaaka") === true) {
      rangat[i].innerHTML = '<input value='+r_type+' type="text" class="ranka_cord ranka_type"><div type="text" class="ranka_cord" style="margin-right: '+correct_measure/5+'px">'+correct_measure+'</div><div class="ranka_secondcord">'+parseFloat(rangat[i].style.bottom)*5+'</div>';
      rangat[i].style.background = yr_c;
    }
    else if(rangat[i].classList.contains("saumaranka") === true) {
      if(rangat[i].classList.contains("ranka_pysty")) {
        rangat[i].innerHTML = '<input value='+r_type+' type="text" class="ranka_cord ranka_type"><div type="text" style="margin-top: '+parseFloat(rangat[i].offsetHeight)+'px" class="ranka_cord" >'+correct_measure+'</div><div class="ranka_secondcord" style="margin-top: '+parseFloat(rangat[i].offsetHeight)+'px">'+parseFloat(rangat[i].style.left)*5+'</div>';
      }
      else if(rangat[i].classList.contains("ranka_vaaka")) {
        rangat[i].innerHTML = '<input value='+r_type+' type="text" class="ranka_cord ranka_type"><div type="text" class="ranka_cord" style="margin-right: '+correct_measure/5+'px">'+correct_measure+'</div><div class="ranka_secondcord">'+parseFloat(rangat[i].style.bottom)*5+'</div>';
      }
      rangat[i].style.background = sr;
    }
    else if(rangat[i].classList.contains("ranka_pysty") === true && rangat[i].classList.contains("valiranka") === true) {
      rangat[i].innerHTML = '<input value='+r_type+' type="text" class="ranka_cord ranka_type"><div type="text" style="margin-top: '+parseFloat(rangat[i].offsetHeight)+'px" class="ranka_cord" >'+correct_measure+'</div><div class="ranka_secondcord" style="margin-top: '+parseFloat(rangat[i].offsetHeight)+'px">'+parseFloat(rangat[i].style.left)*5+'</div>';
      rangat[i].style.background = vr_yc;
    }
    else if(rangat[i].classList.contains("ranka_vaaka") === true && rangat[i].classList.contains("valiranka") === true) {
      rangat[i].innerHTML = '<input value='+r_type+' type="text" class="ranka_cord ranka_type"><div type="text" class="ranka_cord" style="margin-right: '+correct_measure/5+'px">'+correct_measure+'</div><div class="ranka_secondcord">'+parseFloat(rangat[i].style.bottom)*5+'</div>';
      rangat[i].style.background = vr_xc;
    }
  }
}

function change__rankacord(input) {
  const oldvalue = input.dataset.from;
  let c_kiinnikkeet = canvas.querySelectorAll(".tyostot__tyosto");
  k_x = [];
  k_y = [];
  tochange_array_x = [];
  tochange_array_y = [];
  for (var i = c_kiinnikkeet.length - 1; i >= 0; i--) {
    k_x.push(c_kiinnikkeet[i].getBoundingClientRect().left);
    k_y.push(c_kiinnikkeet[i].getBoundingClientRect().bottom);
  }
  if ((input.parentElement.parentElement).classList.contains("levy")) {
    thislevy = input.parentElement;
  }
  else if ((input.parentElement.parentElement.parentElement).classList.contains("levy")) {
    thislevy = input.parentElement.parentElement;
  }
  if ((input.parentElement).classList.contains("tyostot__tyosto")) {
    thistyosto = input.parentElement;
  }
  else if ((input.parentElement.parentElement).classList.contains("tyostot__tyosto")) {
    thistyosto = input.parentElement.parentElement;
  }
  k_x_array = removeDuplicates(k_x);
  k_y_array = removeDuplicates(k_y);
  thisinput_l = input.parentElement.getBoundingClientRect().left;
  thisinput_b = input.parentElement.getBoundingClientRect().bottom;
  tochange_array_x.push(thisinput_l);
  tochange_array_y.push(thisinput_b);
  for (var i = k_x_array.length - 1; i >= 0; i--) {
    if (thisinput_l === k_x_array[i]) {
      tochange_array_x.push(k_x_array[i]);
    }
  }
  for (var i = k_y_array.length - 1; i >= 0; i--) {
    if (thisinput_b === k_y_array[i]) {
      tochange_array_y.push(k_y_array[i]);
    }
  }
  x = removeDuplicates(tochange_array_x);
  y = removeDuplicates(tochange_array_y);
  if (thistyosto.classList.contains("tyostot__tyosto_pysty")) {
    old_cord = parseFloat(thistyosto.style.left);
  }
  else if (thistyosto.classList.contains("tyostot__tyosto_vaaka")) {
    old_cord = parseFloat(thistyosto.style.bottom);
  }
  newvalue = parseFloat(input.value);
  erotus = oldvalue - newvalue;
  new_cord = (parseFloat(old_cord) - (parseFloat(erotus) / 5)) + "px";
  if (thistyosto.classList.contains("tyostot__tyosto_pysty")) {
    thistyosto.style.left = new_cord;
    input.dataset.from = parseFloat(new_cord) * 5;
    input.value = parseFloat(new_cord) * 5;
    for (var i = c_kiinnikkeet.length - 1; i >= 0; i--) {
      if (thisinput_l === c_kiinnikkeet[i].getBoundingClientRect().left) {
        c_kiinnikkeet[i].style.left = new_cord;
        c_kiinnikkeet[i].querySelector("input").value = newvalue;
      }
    }
  }
  else if (thistyosto.classList.contains("tyostot__tyosto_vaaka")) {
    thistyosto.style.bottom = new_cord;
    for (var i = c_kiinnikkeet.length - 1; i >= 0; i--) {
      if (thisinput_b === c_kiinnikkeet[i].getBoundingClientRect().bottom) {
        c_kiinnikkeet[i].style.bottom = new_cord;
        c_kiinnikkeet[i].querySelector("input").value = newvalue;
      }
    }
  }



  // console.log("XXX: " + x);
  // console.log("YYY: " + y);
}
erikoisranka_no = 0;
valiranka_no = 0;
saumaranka_no = 0;


function create__ranka__asexcel() {
  rangat = canvas.querySelectorAll(".rangat__grandrow > div");
  h = parseFloat(document.querySelector("#box_h").value);
  w = parseFloat(document.querySelector("#box_w").value);
  rangat_asennus_data = [];

  ranka_as_excel = document.querySelector(".ranka_as_excel");
  tableExcel = document.querySelector(".ranka_as_excel tbody");
  tableExcel_trs = tableExcel.querySelectorAll("tr:not(.headingrow)");

  tableExcel_trs.forEach(tr => {
    tr.remove();
  });
  
  for (var i = 0; i < rangat.length; i++) {
    const row = document.createElement('tr');
    var h1 = document.createElement('td');
    var h2 = document.createElement('td');
    var h3 = document.createElement('td');
    var h4 = document.createElement('td');
    var h5 = document.createElement('td');
       
    h1.innerHTML = rangat[i].dataset.rangan_koodin_alku;
    h2.innerHTML = rangat[i].dataset.name + " " + rangat[i].dataset.rangan_koodin_alku;

    if (rangat[i].classList.contains("ranka_pysty")) {
      pituus = parseFloat(rangat[i].querySelector(".ranka_cord:not(.ranka_type)").innerText);
      etaisyys = parseFloat(rangat[i].querySelector(".ranka_secondcord").innerText);
      h3.innerHTML = pituus;
      h5.innerHTML = etaisyys + " mm vasemmalle tilan " + current_tila + " seinässä " + current_room;
    }
    else if (rangat[i].classList.contains("ranka_vaaka")) {
      pituus = parseFloat(rangat[i].querySelector(".ranka_cord:not(.ranka_type)").innerText);
      etaisyys = parseFloat(rangat[i].querySelector(".ranka_secondcord").innerText);
      h3.innerHTML = pituus;
      h5.innerHTML = etaisyys + " mm ylös tilan " + current_tila + " seinässä " + current_room;
    }
    h4.innerHTML = "1";
    rangat_asennus_data.push({
      "Tyyppi": h1.textContent,
      "Nimi": h2.textContent,
      "Pituus (mm)": h3.textContent,
      "KPL": h4.textContent,
      "Asennus": h5.textContent
    }, );
    row.append(h1);
    row.append(h2);
    row.append(h3);
    row.append(h4);
    row.append(h5);
    tableExcel.append(row);
  }
  
}

function create__ranka__tuoexcel() {
  rangat = canvas.querySelectorAll(".rangat__grandrow > div");
  h = parseFloat(document.querySelector("#box_h").value);
  w = parseFloat(document.querySelector("#box_w").value);
  rangat_tuotanto_data = [];

  ranka_tuo_excel = document.querySelector(".ranka_tuo_excel");
  tableExcel = document.querySelector(".ranka_tuo_excel tbody");
  tableExcel_trs = tableExcel.querySelectorAll("tr:not(.headingrow)");

  tableExcel_trs.forEach(tr => {
    tr.remove();
  });
  
  for (var i = 0; i < rangat.length; i++) {
    const row = document.createElement('tr');
    var h1 = document.createElement('td');
    var h2 = document.createElement('td');
    var h3 = document.createElement('td');
    var h4 = document.createElement('td');
    var h5 = document.createElement('td');
    var h6 = document.createElement('td');
    var h7 = document.createElement('td');
    var h8 = document.createElement('td');
    var h9 = document.createElement('td');
    var h10 = document.createElement('td');
    var h11 = document.createElement('td');
    var h12 = document.createElement('td');
    var h13 = document.createElement('td');
    var h14 = document.createElement('td');
    var h15 = document.createElement('td');
    var h16 = document.createElement('td');
    var h17 = document.createElement('td');
    var h18  = document.createElement('td');
    var h19  = document.createElement('td');
    var h20  = document.createElement('td');

    current_date = new Date();

       
    h1.innerHTML = i+1;
    h2.innerHTML = rangat[i].dataset.rangan_koodin_alku;
    h3.innerHTML = rangat[i].dataset.tilauskoodi;
    h4.innerHTML = parseFloat(rangat[i].querySelector(".ranka_cord:not(.ranka_type)").innerText);
    h5.innerHTML = "1";
    h6.innerHTML = rangat[i].dataset.materiaali;

    h7.innerHTML = rangat[i].dataset.paksuus;
    h8.innerHTML = rangat[i].dataset.laatu;
    h9.innerHTML = rangat[i].dataset.vari_nimi;
    h10.innerHTML = rangat[i].dataset.ncs_code;
    h11.innerHTML = current_date.toLocaleDateString('fi-FI');
    h12.innerHTML = "Tilattu";
    h13.innerHTML = current_asiakas;
    h14.innerHTML = document.querySelector("h1").innerText;
    h15.innerHTML = "-";
    h16.innerHTML = "-";
    h17.innerHTML = current_tila;
    h18.innerHTML = current_room;
    h19.innerHTML = "";
    h20.innerHTML = "";

    rangat_tuotanto_data.push({
      "Rivinumero": h1.textContent,
      "Rangan tyyppi": h2.textContent,
      "Tilauskoodi": h3.textContent,
      "Pituus": h4.textContent,
      "KPL": h5.textContent,
      "MATERIAALI": h6.textContent,
      "PAKSUUS": h7.textContent,
      "LAATU": h8.textContent,
      "Väri nimi": h9.textContent,
      "NCS code": h10.textContent,
      "Tilattu PVM": h11.textContent,
      "STATUS": h12.textContent,
      "Asiakas": h13.textContent,
      "Projekti": h14.textContent,
      "Osoite": h15.textContent,
      "Palletgroup": h16.textContent,
      "Asunto Nimi 1": h17.textContent,
      "Nimi 2": h18.textContent,
      "Työstöt": h19.textContent,
      "Asennus": h20.textContent
    }, );
    row.append(h1);
    row.append(h2);
    row.append(h3);
    row.append(h4);
    row.append(h5);
    row.append(h6);
    row.append(h7);
    row.append(h8);
    row.append(h9);
    row.append(h10);
    row.append(h11);
    row.append(h12);
    row.append(h13);
    row.append(h14);
    row.append(h15);
    row.append(h16);
    row.append(h17);
    row.append(h18);
    row.append(h19);
    row.append(h20);
    tableExcel.append(row);
  }
}

function lataa_ranka_as_excel() {
  filename = current_tila +" seinä "+ current_room+' [Rangat Asennusohje].xlsx';
  var ws = XLSX.utils.json_to_sheet(rangat_asennus_data);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Rangat");
  XLSX.writeFile(wb, filename);
}

function lataa_ranka_tuo_excel() {
  filename = current_tila +" seinä "+ current_room+' [Rangat Asennusohje].xlsx';
  var ws = XLSX.utils.json_to_sheet(rangat_tuotanto_data);
  var wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Rangat");
  XLSX.writeFile(wb, filename);
}