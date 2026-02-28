/**
 * Client testimonials from Google reviews and other sources.
 * Update GOOGLE_REVIEW_URL with your actual Google Business "Leave a review" link
 * when available (get it from Google Business Profile > Share > Get link).
 */
/** Link to Google Business - opens Aesthetic Gardener listing where users can leave a review */
export const GOOGLE_REVIEW_URL =
  'https://www.google.com/maps/search/?api=1&query=Aesthetic+Gardener+Holland+MI';

export interface Testimonial {
  text: string;
  author: string;
  rating: number;
  source?: 'google';
}

export const testimonials: Testimonial[] = [
  {
    text: 'They do a good job, landscaping and also mowing lawn!',
    author: 'Sue Miller',
    rating: 5,
    source: 'google',
  },
  {
    text: 'We have used Aesthetic Gardener for our lawn care, snow removal, and fall clean-up for a couple of years now. They are very responsive and do a great job.',
    author: 'Ian Stetter',
    rating: 5,
    source: 'google',
  },
  {
    text: 'Owner is very friendly and they are equipped to get the job done.',
    author: 'Tamara Sebasta',
    rating: 5,
    source: 'google',
  },
  {
    text: 'Owner/operator was friendly.',
    author: 'Spencer Emmons',
    rating: 5,
    source: 'google',
  },
  {
    text: 'They transformed our backyard into an absolute paradise. The attention to detail and professionalism was outstanding!',
    author: 'Sarah M.',
    rating: 5,
  },
  {
    text: 'Best landscaping company in West Michigan! They handle everything from lawn care to snow removal. Highly recommend!',
    author: 'Mike P.',
    rating: 5,
  },
];
