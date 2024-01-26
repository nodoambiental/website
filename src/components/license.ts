import {LitElement, html} from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { AdoptedLitElement } from '../util/lit';


    
type LicenseVersions = "1.0" | "2.0" | "2.5" | "3.0" | "4.0";

type LicenseTypes = "by" | "by-nc" | "by-sa" | "by-nd" | "by-nc-sa" | "by-nc-nd"; 

@customElement('cc-license-button')
export class CCLicenseButton extends AdoptedLitElement {
    @property()
    version: LicenseVersions = "4.0";
    @property()
    type: LicenseTypes = "by-nc";

    render() {

        return html`
      
        <a rel="license" href="http://creativecommons.org/licenses/${this.type}/${this.version}/"><img alt="Licencia de Creative Commons" style="border-width:0" src="https://licensebuttons.net/l/${this.type}/${this.version}/88x31.png"></a>
      
        `;
      
      }
}



@customElement('cc-license')
export class CCLicense extends AdoptedLitElement {
    @property()
    version: LicenseVersions = "4.0";
    @property()
    type: LicenseTypes = "by-nc";

    licenseTypeMap: Record<string, string> = {
        "by": "Atribución", "nc": "No Comercial", "sa": "Compartir Igual", "nd": "Sin Derivadas"
    };


    typeName = () => 
        this.type.split("-").map((name): string => {
            return this.licenseTypeMap[name];
        }).join(" - ")
        ;

    render() {

        const ccbutton = html`<cc-license-button version="${this.version}" type="${this.type}" class="mx-auto my-6"></cc-license-button>`;

        const cclink = html`<a rel="license" href="https://creativecommons.org/licenses/${this.type}/${this.version}/deed.es_ES">Licencia de Creative Commons ${this.typeName()} ${this.version} Internacional.</a>`;

        const cctext = html` <p>Esta obra está bajo una ${cclink} <p>`;

        return html`
      
        <div class="card w-96 bg-base-300 shadow-xl mx-auto my-6">
            <div class="card-body text-center">
                ${ccbutton}

                ${cctext}
               
            </div>
        </div>
        `;
      
      }
}
