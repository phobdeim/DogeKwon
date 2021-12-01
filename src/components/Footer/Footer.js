import styles from "./Footer.module.css";
import Logo from "../../assets/logo.png";
import TwitterLogo from "../../assets/twitterLogo.png";
import TelegramLogo from "../../assets/telegramLogo.png";
import DiscordLogo from "../../assets/discordLogo.png";

const Footer = () => {
  return (
    <div id={styles.root}>
      <div className={styles.column}>
        <img width="99" src={Logo}></img>
        <h1 id={styles.title}>DogeKwon</h1>
      </div>

      <div className={styles.column}>
        <h2 className={styles.subheading}>Project</h2>
        <a className={styles.link}>Whitepaper</a>
        <br />
        <a className={styles.link}>Terraswap</a>
        <br />
        <a className={styles.link}>Token</a>
      </div>

      <div className={styles.column}>
        <h2 className={styles.subheading}>Community</h2>

        <a className={styles.link}>
          <img className={styles.linkIcon} src={TelegramLogo}></img> Telegram
        </a>
        <br />
        <a className={styles.link}>
          <img className={styles.linkIcon} src={TwitterLogo}></img> Twitter
        </a>
        <br />
        <a className={styles.link}>
          <img className={styles.linkIcon} src={DiscordLogo}></img> Discord
        </a>
      </div>

      <div className={styles.column}>
        <h2 className={styles.subheading}>Contact</h2>
        <a
          target="_blank"
          href="mailto:hello@dogekwon.com"
          className={styles.link}
        >
          hello@dogekwon.com
        </a>
      </div>
    </div>
  );
};

export default Footer;
