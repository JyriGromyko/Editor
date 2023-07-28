
<form class="step_screen drawscreen_section form__butsection" id="drawscreen_section_one" 
 action="/updateproject.php" enctype='multipart/form-data'>

   <!-- <input type="hidden" value="drawscreen_section_one" name="step" class="step">
   <input type="hidden" value="" name="wall" class="wall">
   <input type="hidden" value="" name="id" class="id">
   <input type="hidden" value="" name="room" class="room">
   <input type="hidden" value="" name="settings" class="settings">
   <input type="hidden" value="" name="mittapisteet" class="mittapisteet">
   <input type="hidden" value="" name="aukot" class="aukot">
   <input type="hidden" value="" name="reijat" class="reijat">
   <input type="hidden" value="" name="saumat" class="saumat">
   <input type="hidden" value="" name="levyt" class="levyt">
   <input type="hidden" value="" name="rangat" class="rangat">
   <input type="hidden" value="" name="listat" class="listat">
   <input type="hidden" value="" name="kokonaisalue" class="kokonaisalue">
   <input type="hidden" value="" name="levytettava_alue" class="levytettava_alue">
   <input type="hidden" value="" name="poisjaava_alue" class="poisjaava_alue">
   <input type="hidden" value="" name="keskusmittapiste_cord" class="keskusmittapiste_cord">
   <input type="hidden" value="" name="reklamaatiot" class="reklamaatiot"> -->
   </div>
   <section class="nav">
      <nav>
         <ul>
            <li><div onclick="$('#step_drawscreen').val('rooms');refresh__drawcontrols();updatearea();degradate_url(2);">Ristivalikkoon</div></li>

            <li><div onclick="$('#step_drawscreen').val('drawscreen_section_one');" class="nav_current">Origo</div></li>
            <li><div onclick="$('#step_drawscreen').val('drawscreen_section_two');refresh__drawcontrols();updatearea();">Aukot</div></li>
            <li><div onclick="$('#step_drawscreen').val('drawscreen_section_three');refresh__drawcontrols();updatearea();">Läpiviennit</div></li>
            <li><div onclick="$('#step_drawscreen').val('drawscreen_section_four');refresh__drawcontrols();updatearea();">Saumat</div></li>
            <li><div onclick="$('#step_drawscreen').val('drawscreen_section_tyostot');refresh__drawcontrols();updatearea();">Kiinnikkeet</div></li>
            <li><div onclick="$('#step_drawscreen').val('drawscreen_section_five');refresh__drawcontrols();updatearea();">Ladonta</div></li>

            <li><div onclick="alert('Onnistuu kiinnikkeet-kohdasta');">Seinät</div></li>
            <li><div onclick="$('#step_drawscreen').val('drawscreen_section_esikatselu');refresh__drawcontrols();updatearea();">Levyt</div></li>
            <li><div onclick="$('#step_drawscreen').val('drawscreen_section_six');refresh__drawcontrols();updatearea();">Rangat</div></li>
            <li><div onclick="$('#step_drawscreen').val('drawscreen_section_seven');refresh__drawcontrols();updatearea();">Listat</div></li>
            <li><div onclick="$('#step_drawscreen').val('project_start');refresh__drawcontrols();updatearea();">Päävalikkoon</div></li>
            <!-- <li><div onclick="refresh__drawcontrols();updatearea();$('#step_drawscreen').val('drawscreen_section_two');">Seuraava</div></li> -->
            

         </ul>
      </nav>
   </section> 
   <section class="excel">
      <input type="num" id="origo_x" step="1" value="<?= $post['room_one_a-w'] / 2 ?>" oninput="changeCoords(['inpW', '#origo_x'], '#drawarea__origo_central', null, '.drawarea .canvas', [<?= $post['room_one_a-w'] ?>, <?= $post['room_one_a-h'] ?>])">
      <input type="num" id="origo_y" step="1" value="<?= $post['room_one_a-h'] / 2 ?>" oninput="changeCoords(['inpH', '#origo_y'], '#drawarea__origo_central', null, '.drawarea .canvas', [<?= $post['room_one_a-w'] ?>, <?= $post['room_one_a-h'] ?>])">
   </section>
   <div class="modal-container">
    <div class="modal-background">
      <div class="modal">
         <div class="modal_close_btn"><svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20 1.87367L17.9857 0.0703049L10 7.21983L2.01429 0.0703049L0 1.87367L7.98572 9.0232L0 16.1727L2.01429 17.9761L10 10.8266L17.9857 17.9761L20 16.1727L12.0143 9.0232L20 1.87367Z" fill="#444444"/></svg></div>
         <h2><input type="text" value="Mittapiste " class="lineinput" id="mittapiste__name"></h2>
         <section>
           <h4>Etäisyys (mm)</h4>
           <fieldset>
               <input id="dist_origo" name="mittapiste__distance" type="radio" onfocus="give__origo_cord();">
               <label for="dist_origo">Origosta</label>
               <input id="dist_side" name="mittapiste__distance" type="radio" onfocus="null__origo_cord();">
               <label for="dist_side">Omat mitat</label>
           </fieldset>
        </section>
        <section class="row cord">
            <div class="col-6" style="display: flex;flex-direction: column;">
               <div class="cord__item">
                  <label for="cord_up">Ylös</label>
                  <input id="cord_up" name="" type="tel" class="lineinput" oninput="change__newdiv_cord();" onchange="cord__check(this);">
               </div>
               <div class="cord__item" style="display: none;">
                  <label for="cord_low">Alas</label>
                  <input id="cord_low" name="" type="tel" class="lineinput" oninput="change__newdiv_cord();" onchange="cord__check(this);">
               </div>
               
               <div class="cord__item" style="display: none;">
                  <label for="cord_r"></label>
                  <input id="cord_r" name="" type="tel" class="lineinput" oninput="change__newdiv_cord();" onchange="cord__check(this);">
               </div>
            </div>
           <div class="col-6">
            <div class="cord__item">
                  <label for="cord_left">Oikealle</label>
                  <input id="cord_left" name="" type="tel" class="lineinput" oninput="change__newdiv_cord();" onchange="cord__check(this);">
               </div>

              <div id="setting__canvas_mitta" class="setting__canvas">
                 
              </div>
           </div>
        </section>
         
        <div class="modal_close_btn drawarea__controls_btn" onclick="mitta__create_mitta();">Valmis</div>
        <i>Muitathan, että aukot ja läpiviennit voidaan asettaa vain 2 ensimmäisestä mittapisteestä</i>
      </div>
    </div>
  </div>
</form>