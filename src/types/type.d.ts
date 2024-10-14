declare interface PopUpHeaderProps {
  title: string;
  subtitle: string;
  onClose: () => void;
}

declare interface RewardItemProps {
  imageSrc: StaticImageData;
  label: string;
  value: string | number;
}

declare interface RewardPopUpProps {
  title: string;
  subtitle: string;
  rewards: Reward[];
}

declare interface ProgressProps {
  currentPoints: number;
  totalPoints: number;
}
