import React from "react";
import ActionIcon from "../../../Icons/Action.svg";
import AdventureIcon from "../../../Icons/Adventure.svg";
import AnimationIcon from "../../../Icons/Animation.svg";
import ComedyIcon from "../../../Icons/Comedy.svg";
import CrimeIcon from "../../../Icons/Crime.svg";
import DocumentaryIcon from "../../../Icons/Documentary.svg";
import DramaIcon from "../../../Icons/Drama.svg";
import FantasyIcon from "../../../Icons/Fantasy.svg";
import FamilyIcon from "../../../Icons/Family.svg";
import HistoryIcon from "../../../Icons/History.svg";
import HorrorIcon from "../../../Icons/Horror.svg";
import MusicIcon from "../../../Icons/Music.svg";
import MysteryIcon from "../../../Icons/Mystery.svg";
import RomanceIcon from "../../../Icons/Romance.svg";
import SciFiIcon from "../../../Icons/SciFi.svg";
import ThrillerIcon from "../../../Icons/Thriller.svg";
import WarIcon from "../../../Icons/War.svg";
import WesternIcon from "../../../Icons/Western.svg";

const icons = {
  Action: ActionIcon,
  Adventure: AdventureIcon,
  Animation: AnimationIcon,
  Comedy: ComedyIcon,
  Crime: CrimeIcon,
  Documentary: DocumentaryIcon,
  Drama: DramaIcon,
  Fantasy: FantasyIcon,
  Family: FamilyIcon,
  History: HistoryIcon,
  Horror: HorrorIcon,
  Music: MusicIcon,
  Mystery: MysteryIcon,
  Romance: RomanceIcon,
  "Science Fiction": SciFiIcon,
  Thriller: ThrillerIcon,
  War: WarIcon,
  Western: WesternIcon
};

const Icon = ({ genre }) => {
  console.log(genre);
  let icon = icons[genre];
  console.log(icon);
  return <img className="genre-icon" src={icon} alt={genre} />;
};

export default Icon;
