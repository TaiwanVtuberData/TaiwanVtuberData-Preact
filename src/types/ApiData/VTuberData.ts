import { Activity } from '../Common/Activity';
import { VideoInfo } from '../Common/VideoInfo';
import { TwitchData } from './TwitchData';
import { YouTubeData } from './YouTubeData';

export interface VTuberData {
  readonly id: string;
  readonly activity: Activity;
  readonly name: string;
  readonly imgUrl?: string;
  readonly YouTube?: YouTubeData;
  readonly Twitch?: TwitchData;
  readonly popularVideo?: VideoInfo;
  readonly group?: string;
  readonly nationality?: string;
}

export interface VTuberDataResponse {
  readonly VTubers: ReadonlyArray<VTuberData>;
}
