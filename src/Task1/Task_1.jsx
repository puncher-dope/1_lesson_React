import { useState } from 'react'
import styles from '/src/Task1/Task.module.css'
export default function Task1() {

	const [value, setValue] = useState('');
	const [list, setList] = useState([])
	const [error, setError] = useState('')
	const onInputButtonClick = () => {
		const promptValue = prompt('Введите сообщение')

		if (promptValue.length < 3) {
			setError(true)
			setValue('')
		} else {
			setValue(promptValue)
			setError('')
		}
	}

	const isValueValid = () => {
		if (value.length < 3) {
			false
		} else {
			true
		}
	}

	const onAddButtonClick = () => {

		if (value.length > 3) {
			setValue('')
			setError('')
			list.push(value)
			const updatedList = [...list]
			setList(updatedList)
			console.log(list);
		}
	}

	return (
		<>
			<div className={styles.app}>
				<h1 className={styles["page-heading"]} >Ввод значения</h1>
				<p className={styles["no-margin-text"]}>
					Текущее значение <code>value</code>: "<output
						className={styles["current-value"]}> {value}</output>"
				</p>
				{error == true ? <div className={styles.error}>Введенное значение должно содержать минимум 3 символа</div> : ''}

				<div className={styles["buttons-container"]}>
					<button className={styles.button} onClick={onInputButtonClick}>Ввести новое</button>
					<button onClick={onAddButtonClick} className={styles.button} disabled={!isValueValid}>Добавить в список</button>
				</div>
				<div className={styles["list-container"]}>
					<h2 className={styles["list-heading"]}>Список:</h2>

					{
						!list.length ?
							<p className={styles["no-margin-text"]}>Нет добавленных элементов</p> :


							<ul className={styles.list}>

								{list.map((data, i) => {
									return <li key={i} > {data} </li>
									console.log(data);
								})}

							</ul>
					}

				</div>
			</div >
		</>
	)
}
