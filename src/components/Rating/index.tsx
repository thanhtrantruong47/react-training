import { StarIcon } from '@/components';

interface RatingProps {
  numberRating: number;
}

const Rating = ({ numberRating }: RatingProps) => (
  <>
    {Array.from({ length: numberRating }).map((_, index) => (
      <StarIcon key={index} />
    ))}
  </>
);

export default Rating;
