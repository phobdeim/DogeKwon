import { useRef } from "react";

import Footer from "../Footer/Footer";
import Roadmap from "./Roadmap";

import styles from "./LandingPage.module.css";
import Logo from "../../assets/logo.png";
import TwitterLogo from "../../assets/twitterLogo.png";
import TelegramLogo from "../../assets/telegramLogo.png";
import DiscordLogo from "../../assets/discordLogo.png";
import DownIcon from "../../assets/downIcon.png";
import Fire from "../../assets/fire.png";
import SmallFire from "../../assets/smallFire.png";
import Collapsible from "react-collapsible";
import HamburgerIcon from "../../assets/hamburger.svg";

const LandingPage = () => {
  const introRef = useRef();
  const careersRef = useRef();

  const hamburgerIcon = <img id={styles.hamburgerIcon} src={HamburgerIcon} />;

  return (
    <div id={styles.root}>
      <div id={styles.firstSection}>
        <div id={styles.headerButtonsContainer}>
          <div id={styles.mobileHeaderButtons}>
            <Collapsible trigger={hamburgerIcon}>
              <a
                href="https://coinhall.org/charts/terra/terra1hm4gfvl5d65v03wzgvy5lh780dnwk6xtnaeurj"
                target="_blank"
              >
                <button className={styles.mobileHeaderButton}>Buy/Chart</button>
              </a>
              <a
                href="https://tokens.daic.capital/?contract=terra16xtp5rmhx4agcas4cyg3srp6m6gauqagh02v9z"
                target="_blank"
              >
                <button className={styles.mobileHeaderButton}>Holders</button>
              </a>
            </Collapsible>
          </div>

          <div id={styles.desktopHeaderButtons}>
            <a
              href="https://coinhall.org/charts/terra/terra1hm4gfvl5d65v03wzgvy5lh780dnwk6xtnaeurj"
              target="_blank"
            >
              <button className={styles.headerButton}>Buy/Chart</button>
            </a>
            <a
              href="https://tokens.daic.capital/?contract=terra16xtp5rmhx4agcas4cyg3srp6m6gauqagh02v9z"
              target="_blank"
            >
              <button className={styles.headerButton}>Holders</button>
            </a>
          </div>
        </div>

        <img id={styles.logo} src={Logo}></img>
        <h1 id={styles.title}>DogeKwon</h1>
        <h5 id={styles.titleSub}>For Lunatics, by Lunatics.</h5>

        <div id={styles.socials}>
          <img className={styles.socialsLogo} src={TwitterLogo}></img>
          <img className={styles.socialsLogo} src={TelegramLogo}></img>
          <img className={styles.socialsLogo} src={DiscordLogo}></img>
        </div>

        <img
          id={styles.down}
          src={DownIcon}
          onClick={() => {
            introRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        ></img>
      </div>

      <div id={styles.secondSection} ref={introRef}>
        <h2 className={styles.heading}>What is DogeKwon?</h2>

        <p className={styles.text}>
          DogeKwon is a community-centered project created on Terra blockchain.
          Fundamental goal of the project was to unite all Terrans and establish
          a supportive, thriving community and maintain the relationship with it
          through transparency and trust. We achieved that in a record time.
          <br />
          <br />
          Our mission is to expand the boundaries of what it means to be a meme
          coin. We are dedicated to creating an interactive and intuitive
          platform for all cryptocurrency users. We are especially mindful of
          everyone that's new and unfamiliar with Terra ecosystem and
          cryptocurrency space in general and that's why we are keen on making
          the platform easily approachable, so we can be their guiding hand
          while they discover the vast space of cryptocurrency and amazing
          technologies like staking and NFTs. This is the foundation we build
          on.
        </p>

        <h2 id={styles.whoAreWeHeading} className={styles.heading}>
          Who are we?
        </h2>

        <p className={styles.text}>
          We are a team of developers, designers and artists who share a common
          love and interest for Terra ecosystem and cryptocurrency space in
          general. Our vision is constantly expanding and our numbers are
          growing each day.
          {/*If you want to become a part of our amazing team,
          click the button below.*/}
        </p>

        {/*
        <button
          id={styles.joinTeamButton}
          onClick={() => {
            careersRef.current.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Join our Team
        </button>
        */}

        <div id={styles.tokenomicsBox}>
          <h2 className={styles.heading}>Tokenomics</h2>

          <div className={styles.contentBox}>
            <span className={styles.contentBoxHeading}>Total supply</span>
            <br />
            <span className={styles.contentBoxContent}>
              10,000,000,000 DKWON
            </span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              flexWrap: "wrap",
            }}
          >
            <div className={styles.percentagesContainer}>
              <div className={styles.percentageContainer}>
                <div className={styles.fivePercentBar}></div>
                <div className={styles.fivepercentText}>5% Dev wallet</div>
              </div>
              <div className={styles.percentageContainer}>
                <div className={styles.fivePercentBar}></div>
                <div className={styles.fivepercentText}>5% Foundation</div>
              </div>
              <div className={styles.percentageContainer}>
                <div className={styles.fivePercentBar}></div>
                <div className={styles.fivepercentText}>5% Marketing</div>
              </div>
              <div className={styles.percentageContainer}>
                <div className={styles.eightyFivePercentBar}>
                  <div className={styles.eightyFivePercentText}>
                    85% Liquidity
                  </div>
                </div>
              </div>
            </div>

            <div id={styles.tokensBurnedContainer}>
              <img id={styles.fire} src={Fire}></img>
              <p id={styles.tokensBurnedText}>LP tokens burned</p>
            </div>
          </div>
        </div>

        <img src={SmallFire}></img>
        <h2 className={styles.heading}>LP token burn transactions:</h2>

        <div id={styles.burnTransactionsContainer}>
          <div className={styles.burnTransaction}>
            <a
              className={styles.link}
              target="_blank"
              href="https://finder.terra.money/columbus-5/tx/6022F03025CB40F44F464C211BE23037B80C20D0398C8E585640573C3E1061B6"
            >
              https://finder.terra.money/columbus-5/tx/6022F03025CB40F44F464C211BE23037B80C20D0398C8E585640573C3E1061B6
            </a>
          </div>

          <div className={styles.burnTransaction}>
            <a
              className={styles.link}
              target="_blank"
              href="https://finder.terra.money/columbus-5/tx/B611903881A0EEADA4642E351447F26E1049A3213F4B75B2A1F8D71A5C1FF2C0"
            >
              https://finder.terra.money/columbus-5/tx/B611903881A0EEADA4642E351447F26E1049A3213F4B75B2A1F8D71A5C1FF2C0
            </a>
          </div>

          <div className={styles.burnTransaction}>
            <a
              className={styles.link}
              target="_blank"
              href="https://finder.terra.money/columbus-5/tx/4568FE0E03AD8BF18983F9A20BEBFC4BA753BAEC37BAC707B3C66E07C72FBE59"
            >
              https://finder.terra.money/columbus-5/tx/4568FE0E03AD8BF18983F9A20BEBFC4BA753BAEC37BAC707B3C66E07C72FBE59
            </a>
          </div>
        </div>

        <h2 className={styles.heading}>Roadmap</h2>

        <Roadmap />
        {/*
        <h2 className={styles.heading} ref={careersRef}>
          We are hiring!
        </h2>
        <p className={styles.text}>
          Help us build the most amazing community project in the entire
          cryptoverse! We are looking for talented individuals who share our
          love for Terra ecosystem and cryptocurrency and thrive in a
          team-oriented environment.
        </p>

        <br />
        <h3 className={styles.subheading}>Available roles:</h3>

        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            margin: "auto",
            marginTop: "20px",
            marginBottom: "80px",
            maxWidth: "1700px",
            flexWrap: "wrap",
          }}
        >
          <div className={styles.role}>Head of PR</div>
          <div className={styles.role}>Twitter CM</div>
          <div className={styles.role}>Rust developer</div>
          <div className={styles.role}>NFT artists</div>
          <div className={styles.role}>Discord CM</div>

          <div id={styles.rolesLine}></div>
        </div>

        <p id={styles.rolesSub}>
          If you feel like you're a good fit for one of the roles, contact us
          at:
        </p>

        <div id={styles.email}>
          <span
            onClick={() => window.open("mailto:careers@dogekwon.com", "_blank")}
            style={{ cursor: "pointer" }}
          >
            careers@dogekwon.com
          </span>
        </div>

        <p className={styles.text}>
          Please include information about your previous project experience in
          cryptocurrency space, as well as a portfolio of your work if possible.
        </p>
        */}

        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
