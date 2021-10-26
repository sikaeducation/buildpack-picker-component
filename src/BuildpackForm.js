import './App.css';

function BuildpackForm({handleSubmit, buildpack, setBuildpack}) {
  const handleChange = event => {
    setBuildpack(event.target.value)
  }

  return (
    <form className="buildpack-form" onSubmit={ handleSubmit }>
      <input
        className="buildpack-input"
        type="text"
        value={buildpack}
        onChange={handleChange}
      />
      <input className="secondary-action" type="submit" value="Add Buildpack" />
    </form>
  )
}

export default BuildpackForm;
