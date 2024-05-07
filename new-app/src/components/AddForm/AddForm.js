import { useState } from 'react';
const emptyForm = { id: '', name: '', timeZone: '' };

function AddForm(props) {
    const { onSubmit } = props;

    const [form, setForm] = useState(emptyForm);

    function onChange(e) {
        setForm((prevState) => {
            if (e.target.name === 'name') {
                return { ...prevState, name: e.target.value };
            }
            if (e.target.name === 'timezone') {
                return { ...prevState, timeZone: e.target.value };
            }
        });
    }

    function onClick(e) {
        e.preventDefault();
        onSubmit(form);
        setForm(emptyForm);
    }

    const inputStyle = {
        width: '200px',
        padding: '5px',
        marginRight: '10px',
        marginTop: '10px',
        fontSize: '20px',
        borderRadius: '5px',
        border: '1px solid black',
    };

    return (
        <form className='d-flex flex-nowrap align-items-end justify-content-between'>
            <div className='d-flex flex-column'>
                <label htmlFor='name'>Название</label>
                <input
                    name='name'
                    value={form.name}
                    type='text'
                    onChange={onChange}
                    required
                    style={inputStyle}
                />
            </div>
            <div className='d-flex flex-column'>
                <label htmlFor='timezone'>Временная зона</label>
                <input
                    name='timezone'
                    value={form.timeZone}
                    type='number'
                    min='-12'
                    max='14'
                    onChange={onChange}
                    required
                    style={inputStyle}
                />
            </div>
            <button
                className='btn btn-primary'
                style={{ width: '180px', height: '44px' }}
                onClick={onClick}
            >
                Добавить
            </button>
        </form>
    );
}

export default AddForm;