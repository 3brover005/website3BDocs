export default function html(){
    return `
        <div>
           <!--
            <form action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8" method="POST">

            <input type=hidden name="orgid" value="00D1r000002dpG5">
            <input type=hidden name="retURL" value="https://www.3bdocs.com/contactus-success">
                <div class="slds-form">
                    <div class="slds-form-element slds-form-element_stacked">
                        <label class="slds-form-element__label" ><abbr class="slds-required" title="required">* </abbr>Your Name</label>
                        <div class="slds-form-element__control">
                            <input  id="name" maxlength="80" name="name" size="20" type="text" placeholder="" required class="slds-input"/>
                        </div>
                    </div>
                    <div class="slds-form-element slds-form-element_stacked">
                        <label class="slds-form-element__label" ><abbr class="slds-required" title="required">* </abbr>Email</label>
                        <div class="slds-form-element__control">
                            <input  id="email" maxlength="80" name="email" size="20" type="text" placeholder="How do we contact you?" required class="slds-input"/>
                        </div>
                    </div>
                    <div class="slds-form-element slds-form-element_stacked">
                        <label class="slds-form-element__label" >Phone</label>
                        <div class="slds-form-element__control">
                            <input  id="phone" maxlength="40" name="phone" size="20" type="text" placeholder="How do we call you (if needed)?" class="slds-input"/>
                        </div>
                    </div>
                    <div class="slds-form-element slds-form-element_stacked">
                        <label class="slds-form-element__label" >Subject</label>
                        <div class="slds-form-element__control">
                            <input  id="subject" maxlength="80" name="subject" size="20" type="text"placeholder="What is the issue?"  class="slds-input"/>
                        </div>
                    </div>
                    <div class="slds-form-element slds-form-element_stacked">
                        <label class="slds-form-element__label" ><abbr class="slds-required" title="required">* </abbr>Details</label>
                        <div class="slds-form-element__control">
                            <textarea name="description" class="slds-input" required placeholder="Please explain in detail why you are contacting us.."></textarea>
                        </div>
                    </div>
                </div>
                <input type="submit" name="submit" class="slds-button slds-button_brand">
            </form>
        </div>-->
        <div class="hubspot-case"></div>
    `;
}