import TimelineEventBackground from "itsme/interfaces/timeline-event-background";
import TimelineEventDate from "itsme/interfaces/timeline-event-date";
import TimelineEventMedia from "itsme/interfaces/timeline-event-media";
import TimelineEventText from "itsme/interfaces/timeline-event-text";

export default interface TimelineEvent {
  "background": TimelineEventBackground;
  "start_date": TimelineEventDate;
  "media": TimelineEventMedia;
  "text": TimelineEventText;
  "unique_id": string;
  "group"?: string;
}
