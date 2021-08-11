const appRoot = document.getElementById('app-root');
const select = document.getElementById('select');



function LanguageChoice() {
   select.innerHTML=`
   <option>Select value</option>
   <option class="option" value="Ukrainian">${externalService.getLanguagesList()[0]}</option>
   <option class="option" value="Hungarian">${externalService.getLanguagesList()[1]}</option>
   <option class="option" value="German">${externalService.getLanguagesList()[2]}</option>
   <option class="option" value="Belarusian">${externalService.getLanguagesList()[3]}</option>
   <option class="option" value="French">${externalService.getLanguagesList()[4]}</option>
   <option class="option" value="English">${externalService.getLanguagesList()[5]}</option>
   <option class="option" value="Croatian">${externalService.getLanguagesList()[6]}</option>
   <option class="option" value="Spanish">${externalService.getLanguagesList()[7]}</option>
   <option class="option" value="Guaraní">${externalService.getLanguagesList()[8]}</option>
   <option class="option" value="Portuguese">${externalService.getLanguagesList()[9]}</option>
   <option class="option" value="Aymara">${externalService.getLanguagesList()[10]}</option>
   <option class="option" value="Arabic">${externalService.getLanguagesList()[11]}</option>
   <option class="option" value="Turkish">${externalService.getLanguagesList()[12]}</option>
   <option class="option" value="Mandarin">${externalService.getLanguagesList()[13]}</option>
   <option class="option" value="Japanese">${externalService.getLanguagesList()[14]}</option>
   <option class="option" value="Korean">${externalService.getLanguagesList()[15]}</option> `
   externalService.getLanguagesList();
}
function RegionChoice() {
    select.innerHTML = `
        <option>Select value</option>
        <option class="option" value="Europe">Europe</option>
        <option class="option" value="North America">${externalService.getRegionsList()[0]}</option>
        <option class="option" value="South America">${externalService.getRegionsList()[1]}</option>
        <option class="option" value="Africa">${externalService.getRegionsList()[2]}</option>            
        <option class="option" value="Asia">${externalService.getRegionsList()[3]}</option>
        <option class="option" value="Oceania">${externalService.getRegionsList()[4]}</option>
        <option class="option" id="ok value="Oceania">${externalService.getRegionsList()[5]}</option>`
}
