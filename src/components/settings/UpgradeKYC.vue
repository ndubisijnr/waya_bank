<template>
  <div class="wrapper-main">
    <div class="wrapper-main-header">
      <div class="back">
        <img src="../../assets/icons/back1.svg" />
        <span>Back</span>
      </div>
      <h5 class="updarade-kyc-level">Upgrade  KYC Level</h5>
    </div>

    <div class="wrapper">
      <div class="wrapper-inner">
        <!-- tier 1 !-->
        <div>
          <div class="wrapper-head">
            <h3 class="kyc-stage">Tier 1</h3>
            <div>
              <span class="status">Status</span>
              <div class="status-box">Completed</div>
            </div>
          </div>
          <div class="kyc-verification-area">
            <div class="kyc-requirement">
              <p>KYC Requirement</p>
            </div>
            <div class="kyc">
              <div class="kyc-input">
                <div class="label">Email Address</div>
                <div class="input-area">
                  <input  class="kyc-input-input" />
                  <button class="kyc-button">&rarr; Verify</button>
                </div>
                <div class="status-check"><span class="circle">&#10004;</span> Approved</div>
              </div>
            </div>
          </div>
        </div>

        <!-- tier 2 !-->
        <div>
          <div class="wrapper-head">
            <h3 class="kyc-stage">Tier 2</h3>
            <div>
              <span class="status">Status</span>
              <div class="status-box">Completed</div>
            </div>
          </div>
          <div class="kyc-verification-area">
            <div class="kyc-requirement">
              <p>KYC Requirement</p>
            </div>
            <div class="kyc">
              <div class="kyc-input">
                <div class="label">Business Verification Number (BVN)</div>
                <div class="input-area">
                  <input  class="kyc-input-input" />
                  <span>&#128065;</span>
                  <button class="kyc-button">&rarr; Verify</button>
                </div>
                <div class="status-check"><span class="circle">&#10004;</span> Approved</div>
              </div>
            </div>
          </div>
        </div>

        <!-- tier 3 !-->
        <div>
          <div class="wrapper-head">
            <h3 class="kyc-stage">Tier 3</h3>
            <div>
              <span class="status">Status</span>
              <div class="status-box">Completed</div>
            </div>
          </div>
          <div class="kyc-verification-area">
            <div class="kyc-requirement">
              <p>KYC Requirement</p>
            </div>
            <div class="kyc">
              <div class="kyc-input">
                <div class="label">Passport</div>
                <div class="input-area">
                    <div class="new-upload">
                      <img src="../../assets/icons/new.svg" />
                    </div>
                    <div class="new-upload">
                     <img src="../../assets/icons/upload.svg" />
                   <span>Upload</span></div>
                  </div>
                <div style="width: 20%;display: flex;justify-content: space-between">
                  <div class="status-check"><span class="circle">&#10004;</span> Approved</div>
                  <div class="view"><img src="../../assets/icons/eye.svg" /></div>
                </div>
              </div>
              <div class="kyc-input">
                <div class="label">Passport/ID/Voter’s Card/NIN</div>
                <div class="input-area">
                  <div class="new-upload">
                    <img src="../../assets/icons/new.svg" />
                  </div>
                  <div class="new-upload">
                    <img src="../../assets/icons/upload.svg" />
                    <span>Upload</span></div>
                </div>
                <div style="width: 20%;display: flex;justify-content: space-between">
                  <div class="status-check"><span class="circle">&#10004;</span> Approved</div>
                  <div class="view"><img src="../../assets/icons/eye.svg" /></div>
                </div>
              </div>
              <div class="kyc-input">
                <div class="label">Utility Bill on the name</div>
                <div class="input-area">
                  <div class="new-upload">
                    <img src="../../assets/icons/new.svg" />
                  </div>
                  <div class="new-upload">
                    <img src="../../assets/icons/upload.svg" />
                    <span>Upload</span></div>
                </div>
                <div style="width: 20%;display: flex;justify-content: space-between">
                  <div class="status-check"><span class="circle">&#10004;</span> Approved</div>
                  <div class="view"><img src="../../assets/icons/eye.svg" /></div>
                </div>
              </div>
              <div class="kyc-input">
                <div class="label">Proove of Address, not less than 1 month old</div>
                <div class="input-area">
                  <div class="new-upload">
                    <img src="../../assets/icons/new.svg" />
                  </div>
                  <div class="new-upload">
                    <img src="../../assets/icons/upload.svg" />
                    <span>Upload</span></div>
                </div>
                <div style="width: 20%;display: flex;justify-content: space-between">
                  <div class="status-check"><span class="circle">&#10004;</span> Approved</div>
                  <div class="view"><img src="../../assets/icons/eye.svg" /></div>
                </div>
              </div>
              <div class="kyc-input">
                <div class="label">Reference From 2 Banks</div>
                <div class="input-area">
                  <div class="new-upload">
                    <img src="../../assets/icons/new.svg" />
                  </div>
                  <div class="new-upload">
                    <img src="../../assets/icons/upload.svg" />
                    <span>Upload</span></div>
                </div>
                <div style="width: 20%;display: flex;justify-content: space-between">
                  <div class="status-check"><span class="circle">&#10004;</span> Approved</div>
                  <div class="view"><img src="../../assets/icons/eye.svg" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- tier 4 !-->
        <div>
          <div class="wrapper-head">
            <h3 class="kyc-stage">Tier 4</h3>
            <div>
              <span class="status">Status</span>
              <div class="status-box">Completed</div>
            </div>
          </div>
          <div class="kyc-verification-area">
            <div class="kyc-requirement">
              <p>KYC Requirement</p>
            </div>
            <div class="kyc">
              <div class="kyc-input">
                <div class="label">Address verification - photo of the street,
                  house number</div>
                <div class="input-area">
                  <div class="new-upload">
                    <img src="../../assets/icons/new.svg" />
                  </div>
                  <div class="new-upload">
                    <img src="../../assets/icons/upload.svg" />
                    <span>Upload</span></div>
                </div>
                <div style="width: 20%;display: flex;justify-content: space-between">
                  <div class="status-check"><span class="circle">&#10004;</span> Approved</div>
                  <div class="view"><img src="../../assets/icons/eye.svg" /></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p class="limited-to">You are limited to:</p>
          <p class="kyc-verificaton-area">Daily Number of Transfers- External (1,000) </p>
          <p class="kyc-verificaton-area">Daily limit - External transfer (N5,000,000)</p>
          <p class="kyc-verificaton-area">Single Transfer limit- External Transfer  (N1,000,000)</p>
          <p class="kyc-verificaton-area">Daily Number of Trasfers - Internal (Unlimited) </p>
          <p class="kyc-verificaton-area">Single Transfer limit- Internal  Transfer - Within Wayabank: (N1,000,000) </p>
        </div>
      </div>
      <div class="nav">
        <p class="nav-item">&larr;
          Previous</p>
        <div class="current">1</div>
        <p class="nav-item">
          Next &rarr;</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UpgradeKYC"
}
</script>

<style scoped>
.new-upload{
  width: 124px;
  height: 28px;
  background: #F8F8F8;
  border: 1px dashed #E0E0E0;
  box-shadow: 0px 0px 0px #E5E5E5;
  border-radius: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.view{
  width: 27px;
  height: 28px;
  background: #F8F8F8;
  border: 1px solid #E0E0E0;
  box-shadow: 0px 0px 0px #E5E5E5;
  border-radius: 2px;
}
.nav{
  display: flex;
  height: 28px;
  position: absolute;
  /*border: solid;*/
  bottom: 18px;
  right: 35px;
  gap: 3px;
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  box-shadow: 0px 0px 0px #E5E5E5;
  border-radius: 2px;
}
.nav-item{
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height, or 233% */

  display: flex;
  align-items: center;
  letter-spacing: -0.02em;

  color: #858585;
  cursor: pointer;
}
.current{
  width: 30px;
  height: 28px;
  background: #F8F8F8;
  border: 1px solid #E0E0E0;
  box-shadow: 0px 0px 0px #E5E5E5;
  border-radius: 2px;
  text-align: center;
}
.label{
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  width: 20%;
  color: #1C1C1C
}
.wrapper-inner{
  margin: 30px 30px;
  position: relative;
}
.status-check{
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: #27AE60
}
.circle {
  display: inline-block;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: solid #27AE60;
  /*background-color: #27AE60;*/
  color: #27AE60;
  text-align: center;
  line-height: 20px;
}
.kyc-input-input{
  width: 197px;
  height: 28px;
  background: #F8F8F8;
  border: 1px solid #E0E0E0;
  box-shadow: 0px 0px 0px #E5E5E5;
  border-radius: 4px;
}
.kyc-input{
  display: flex;
  justify-content: space-between;
  margin:34px auto;
  align-items: center;
}
.input-area{
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  width: 50%;
  /*border: solid;*/
}
.kyc-button{
  width: 69px;
  height: 28px;
  background: #F8F8F8;
  border: 1px solid #E0E0E0;
  box-shadow: 0px 0px 0px #E5E5E5;
  border-radius: 2px;
  font-size: 12px;
  line-height: 14px;

  color: #1C1C1C
}
.wrapper{
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  box-shadow: 0px 0px 0px #E5E5E5;
  border-radius: 4px;
  width: 667px;
  height: 581px;
  position: relative;
}
.limited-to{
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 14px;

  color: #1C1C1C;
}

.kyc{
  height: auto;
  background: #FFFFFF;
  border: 1px solid #E0E0E0;
  margin-bottom: 37px;
  padding: 14px;
}

.kyc-stage{
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;

  color: #1C1C1C;
}

.kyc-requirement{
  height: 43px;
  background: #FFFFFF;
  box-shadow: 0px 5px 4px rgba(0, 0, 0, 0.1);
  padding: 15px;
}

.kyc-verificaton-area{
  ont-weight: 500;
  font-size: 12px;
  line-height: 14px;

  color: #1C1C1C;
  margin-top: 13px;
}

.status{
  font-style: normal;
  font-weight: 600;
  font-size: 9px;
  line-height: 21px;
  color: #333333;
}

.status-box{
  width: 112px;
  height: 28px;
  background: #27AE60;
  border: 0.5px solid #E5E5E5;
  box-shadow: 0px 0px 0px #E5E5E5;
  border-radius: 2px;
  color: white;
  text-align: center;
}

.updarade-kyc-level{
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  /* identical to box height, or 111% */

  letter-spacing: 0.2px;

  /* grayscale / black */

  color: #252733;
}

.wrapper-main{
  margin: 55px 54px;
}
.wrapper-head{
  display: flex;
  justify-content: space-between;
}

.wrapper-main-header{
  display: flex;
  justify-content: start;
  gap: 158px;
  margin-bottom: 71px;
}
.back{
  display: flex;
  align-items: center;
  gap: 10px;

}
</style>