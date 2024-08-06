import { StarIcon } from '@/components';

interface RatingProps {
  numberRating: number;
  title: string;
}

const Rating = ({ numberRating, title }: RatingProps) => (
  <>
    {Array.from({ length: numberRating }).map((_, index) => (
      <StarIcon key={`${title}_${index}`} />
    ))}
  </>
);

export default Rating;
