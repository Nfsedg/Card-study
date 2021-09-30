function informationCard(title, description) {
    let view = `
    <div class="card__new" id="card">
        <div class="card__info face">
            ${title}
        </div>
        <div class="card__info back">
            ${description}
        </div>
    </div>
    `

    return view
}