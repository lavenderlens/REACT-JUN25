export function Paragraph(props) {
  // props.message = "some other text";
  // Uncaught TypeError: Cannot assign to read only property 'message' of object
  return (
    <>
      <p>{props.message}</p>
    </>
  );
}
