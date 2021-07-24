const FormSelect = ({ title, value, setState, values }) => {

    return (
        <>
            <div className="horizontal">
                <label>{ title }</label>
                <select name="minCr" id="minCr" value={ value } type='number' onChange={e => setState(e.target.value)}>
                    {values && values.map((value) => (
                        <option value={ value } key={ value }>{ value } </option>
                        ))}
                </select>
            </div>
        </>
    );
}
 
export default FormSelect;