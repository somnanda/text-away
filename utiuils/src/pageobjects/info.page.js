import BasePage from './base.page';
import { generateRandomString } from '../utils/utilities';
import HomePage from './home.page';

class InfoPage extends BasePage {

    get infoBreadcrumb()           { return $('.breadcrumb'); }
    get nameText()                 { return $("input[name='waterfallName']"); }


    get Strings() {
        return{
            expectedInfoBreadcrumbText: 'Ui\nInfo'
        };
    }

    clickInfoTab() {
        HomePage.infoTab.click();
        this.infoBreadcrumb.getText().should.equal(this.Strings.expectedInfoBreadcrumbText);
    }

    verifyInfoWatefall(){
        this.clickInfoTab();
        HomePage.accountSelector.click();   
        for(let j=0; j<HomePage.accountDropdownList.length; j++) {
            HomePage.wait().accountDropdownList[j].click();
            HomePage.waterfallSelector.click();
            for(let i=0; i<HomePage.waterfallDropdownList.length; i++) {
                HomePage.wait().waterfallDropdownList[i].click();
                HomePage.waterfallDropdownList[i].getText().should.equal(this.nameText.getValue());
            }
        }
    }
}

export default new InfoPage();
