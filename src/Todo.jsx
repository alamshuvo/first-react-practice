
export default function Todo({course ,isDone}) {
  if (isDone) {
    return (
        <h2>You are eligable for this {course} course</h2>
    )
  }
  return(
    <h2>You are not eligable for this {course} course</h2>
  )
 
    
}