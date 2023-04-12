export const Statistics = ({ data }) => {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>
      {data.map(({ id, label, percentage }) => (
        <ul key={id}>
          <li>{label}</li>
          <li>{percentage}</li>
        </ul>
      ))}
    </section>
  );
};
