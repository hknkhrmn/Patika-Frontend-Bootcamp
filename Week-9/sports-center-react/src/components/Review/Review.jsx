function Review() {
  const reviews = [
    {
      name: 'Diet Expert',
      role: 'CFO',
      image: '/assets/client1.jpg',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias aut neque, velit rerum ea perspiciatis. Quos non error provident nulla cum facilis dignissimos expedita, suscipit voluptates a, necessitatibus velit.'
    },
    {
      name: 'Cardio Trainer',
      role: 'CEO',
      image: '/assets/client2.jpg',
      comment: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestias aut neque, velit rerum ea perspiciatis. Quos non error provident nulla cum facilis dignissimos expedita, suscipit voluptates a, necessitatibus velit.'
    }
  ];

  return (
    <section className="review" id="review">
      <ReviewTitle />
      <ReviewContainer reviews={reviews} />
    </section>
  );
}

function ReviewTitle() {
  return (
    <div className="review-header">
      <h1>REVIEW CLIENT</h1>
      <p>Lorem Ipsum is not simply random text. It has roots in a piece of classical at Hampden-Sydney College.</p>
    </div>
  );
}

function ReviewContainer({ reviews }) {
  return (
    <div className="review-container">
      {reviews.map((review, index) => (
        <ReviewCard key={index} review={review} />
      ))}
    </div>
  );
}

function ReviewCard({ review }) {
  return (
    <div className="review-card">
      <div className="profile">
        <img src={review.image} alt={review.name} />
        <div className="review-info">
          <h3>{review.name}</h3>
          <span style={{ fontSize: '15px', fontWeight: 500, color: '#363A3E' }}>{review.role}</span>
        </div>
      </div>
      <div className="ribbon-box">
        <p style={{ fontWeight: 550 }}>{review.comment}</p>
      </div>
    </div>
  );
}

export default Review;