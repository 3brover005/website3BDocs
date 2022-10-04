export default function html(){
    return `
        <div>
            <!--  ----------------------------------------------------------------------  -->
            <!--  NOTE: Please add the following <META> element to your page <HEAD>.      -->
            <!--  If necessary, please modify the charset parameter to specify the        -->
            <!--  character set of your HTML page.                                        -->
            <!--  ----------------------------------------------------------------------  -->

            <META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=UTF-8">
            <script src="https://www.google.com/recaptcha/api.js"></script>
            <script>
                function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 
            </script>

            <!--  ----------------------------------------------------------------------  -->
            <!--  NOTE: Please add the following <FORM> element to your page.             -->
            <!--  ----------------------------------------------------------------------  -->

            <form action="https://webto.salesforce.com/servlet/servlet.WebToCase?encoding=UTF-8" method="POST">
                <input type=hidden name='captcha_settings' value='{"keyname":"X3BDocs","fallback":"true","orgId":"00D1r000002dpG5","ts":""}'>
                <input type=hidden name="orgid" value="00D1r000002dpG5">
                <input type=hidden name="retURL" value="https://www.3bdocs.com/contactus-success">

                <!--  ----------------------------------------------------------------------  -->
                <!--  NOTE: These fields are optional debugging elements. Please uncomment    -->
                <!--  these lines if you wish to test in debug mode.                          -->
                <!--  <input type="hidden" name="debug" value=1>                              -->
                <!--  <input type="hidden" name="debugEmail" value="james@3bforms.com">       -->
                <!--  ----------------------------------------------------------------------  -->

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
                
                <div class="g-recaptcha" data-sitekey="6LcilDYiAAAAAJsiuE3oEpzbdn1rmmWUS5kAeUV6"></div><br>
                <input type="submit" name="submit" class="slds-button slds-button_brand">
            </form>
        </div>
    `;
}