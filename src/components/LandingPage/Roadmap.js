import styles from "./Roadmap.module.css";
import CheckedBox from "../../assets/checkedBox.png";
import UncheckedBox from "../../assets/uncheckedBox.png";
import DownIcon from "../../assets/downIcon.png";
import {
  Phase1,
  Phase2,
  Phase3,
  Phase4,
  Phase5,
} from "../../constants/roadmapData";

const Roadmap = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          alignContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <div className={`${styles.blockContainer} ${styles.left}`}>
          <div className={styles.horizontalDottedLeft}></div>
          <div className={styles.dotLeft}></div>

          <div className={styles.block}>
            <div className={styles.headingContainer}>
              <div className={styles.heading1}>Phase 1</div>
              <div className={styles.heading2}>Fundamentals</div>
            </div>

            {Phase1.checked.map((e) => (
              <div style={{ display: "flex" }}>
                <div>
                  <img className={styles.checkBox} src={CheckedBox}></img>
                </div>
                <div className={styles.checkedText}>{e}</div>
              </div>
            ))}
            {Phase1.unChecked.map((e, i) => (
              <div key={i} style={{ display: "flex" }}>
                <div>
                  <img className={styles.checkBox} src={UncheckedBox}></img>
                </div>
                <div className={styles.uncheckedText}>{e}</div>
              </div>
            ))}
          </div>
        </div>
        <div className={`${styles.blockContainer} ${styles.right}`}>
          <div className={styles.horizontalDottedRight}></div>
          <div className={styles.dotRight}></div>

          <div className={styles.block}>
            <div className={styles.block}>
              <div className={styles.headingContainer}>
                <div className={styles.heading1}>Phase 2</div>
                <div className={styles.heading2}>Marketing</div>
              </div>

              {Phase2.unChecked.map((e, i) => (
                <div key={i} style={{ display: "flex" }}>
                  <div>
                    <img className={styles.checkBox} src={UncheckedBox}></img>
                  </div>
                  <div className={styles.uncheckedText}>{e}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`${styles.blockContainer} ${styles.left}`}>
          <div className={styles.horizontalDottedLeft}></div>
          <div className={styles.dotLeft}></div>

          <div className={styles.block}>
            <div className={styles.block}>
              <div className={styles.headingContainer}>
                <div className={styles.heading1}>Phase 3</div>
                <div className={styles.heading2}>Build</div>
              </div>

              {Phase3.unChecked.map((e, i) => (
                <div key={i} style={{ display: "flex" }}>
                  <div>
                    <img className={styles.checkBox} src={UncheckedBox}></img>
                  </div>
                  <div className={styles.uncheckedText}>{e}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`${styles.blockContainer} ${styles.right}`}>
          <div className={styles.horizontalDottedRight}></div>
          <div className={styles.dotRight}></div>

          <div className={styles.block}>
            <div className={styles.block}>
              <div className={styles.headingContainer}>
                <div className={styles.heading1}>Phase 4</div>
                <div className={styles.heading2}>Moving on</div>
              </div>

              {Phase4.unChecked.map((e, i) => (
                <div key={i} style={{ display: "flex" }}>
                  <div>
                    <img className={styles.checkBox} src={UncheckedBox}></img>
                  </div>
                  <div className={styles.uncheckedText}>{e}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          id={styles.five}
          className={`${styles.blockContainer} ${styles.left}`}
        >
          <div className={styles.horizontalDottedLeft}></div>
          <div className={styles.dotLeft}></div>

          <div className={styles.block}>
            <div className={styles.block}>
              <div className={styles.headingContainer}>
                <div className={styles.heading1}>Phase 5</div>
                <div className={styles.heading2}>Bringing value to Terra</div>
              </div>

              {Phase5.unChecked.map((e, i) => (
                <div key={i} style={{ display: "flex" }}>
                  <div>
                    <img className={styles.checkBox} src={UncheckedBox}></img>
                  </div>
                  <div className={styles.uncheckedText}>{e}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.blockContainer}></div>
      </div>

      <img id={styles.downIcon} src={DownIcon}></img>
    </div>
  );
};

export default Roadmap;
