import React, { useState } from "react";

function RecipeCreate({ addRecipe }) {
	// TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
	// TODO: Add the required input and textarea form elements.
	// TODO: Add the required submit and change handlers

	let defaultForm = {
		name: "",
		cuisine: "",
		photo: "",
		ingredients: "",
		preparation: "",
	};

	const [formData, setFormData] = useState(defaultForm);

	function handleInput(event) {
		event.preventDefault();
		setFormData({
			...formData,
			[event.target.name]: event.target.value,
		});
	}

	function handleSubmit(event) {
		event.preventDefault();
		addRecipe(formData);
		setFormData({ ...defaultForm });
	}

	return (
		<form name="create" onSubmit={handleSubmit}>
			<table>
				<thead>
					<tr>
						<th>
							<label htmlFor="name"></label>
						</th>
						<th>
							<label htmlFor="cuisine"></label>
						</th>
						<th>
							<label htmlFor="photo"></label>
						</th>
						<th>
							<label htmlFor="ingredients"></label>
						</th>
						<th>
							<label htmlFor="preparation"></label>
						</th>
						<th></th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<input
								type="text"
								name="name"
								id="name"
								placeholder="Name"
								value={formData.name}
								onChange={handleInput}
							/>
						</td>
						<td>
							<input
								type="text"
								name="cuisine"
								id="cuisine"
								placeholder="Cuisine"
								value={formData.cuisine}
								onChange={handleInput}
							/>
						</td>
						<td>
							<input
								type="text"
								name="photo"
								id="photo"
								placeholder="Image URL"
								value={formData.photo}
								onChange={handleInput}
							/>
						</td>
						<td>
							<textarea
								type="text"
								name="ingredients"
								id="ingredients"
								placeholder="Ingredients"
								value={formData.ingredients}
								onChange={handleInput}
							/>
						</td>
						<td>
							<textarea
								type="text"
								name="preparation"
								id="preparation"
								placeholder="Preparation"
								value={formData.preparation}
								onChange={handleInput}
							/>
						</td>
						<td>
							<button type="submit">Create</button>
						</td>
					</tr>
				</tbody>
			</table>
		</form>
	);
}

export default RecipeCreate;
