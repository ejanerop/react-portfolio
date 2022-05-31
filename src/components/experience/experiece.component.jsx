import "./experience.component.scss";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
    return (
        <section id="experience-section">
            <h2 className="display-5 lh-1 mb-5">Experience</h2>
            <VerticalTimeline lineColor={"#1F1F1F"}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="Mar. 2021 - Present"
                    iconStyle={{background: "rgb(108,117,125)", color: "#fff"}}
                    icon={<i className="fas fa-code timeline-icon"></i>}>
                    <h3 className="vertical-timeline-element-title mb-2">
                        Software Engineer
                    </h3>
                    <span className="vertical-timeline-element-subtitle mb-3">
                        Dofleini Software
                    </span>
                    <div className="mt-1">
                        <span className="experience-badge me-2 mb-2 badge bg-secondary">
                            Grails
                        </span>
                        <span className="experience-badge me-2 mb-2 badge bg-secondary">
                            jQuery
                        </span>
                        <span className="experience-badge me-2 mb-2 badge bg-secondary">
                            Bootstrap
                        </span>
                        <span className="experience-badge me-2 mb-2 badge bg-secondary">
                            MySQL
                        </span>
                    </div>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{background: "rgb(108,117,125)", color: "#fff"}}
                    icon={
                        <i className="fas fa-hourglass-start timeline-icon"></i>
                    }
                />
            </VerticalTimeline>
        </section>
    );
}
