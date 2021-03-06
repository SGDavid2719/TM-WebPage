var l__Distinct__Genres__Array = [], l__Distinct__Countries__Array = [], l__Distinct__Years__Array = [], g__Filtered__Films = [];

function fillFilters() {
    
    getGenres()
    getCountries();
    getYears();

    fillGenreDropdown();
    fillCountryDropdown();
    fillYearDropdown();
}

function getGenres() {
    let l__Genres__By__Film = [...new Set(g__Films.map(l__Films => l__Films.genre))];
    let l__Genres = [];
    for (l__Genres__By__Film__Index in l__Genres__By__Film) {
        let l__Genres__Aux = [...new Set(l__Genres__By__Film[l__Genres__By__Film__Index].map(l__Genre => l__Genre.name))];
        for (l__Genres__Index in l__Genres__Aux) {
            l__Genres.push(l__Genres__Aux[l__Genres__Index]);
        }
    }
    l__Distinct__Genres__Array = [...new Set(l__Genres)].sort((p__First__Genre, p__Second__Genre) => {
        let l__First__Genre = p__First__Genre.toLowerCase();
        let l__Second__Genre = p__Second__Genre.toLowerCase();
        if (l__First__Genre < l__Second__Genre) return -1;
        if (l__First__Genre > l__Second__Genre) return 1;
        return 0;
    });
}

function getCountries() {
    const countries = [...new Set(g__Films.map(l__Films => l__Films.countryOfOrigin.name))];
    l__Distinct__Countries__Array = countries.sort((_firstCountry, _secondCountry) => {
        const firstCountry = _firstCountry.toLowerCase();
        const secondCountry = _secondCountry.toLowerCase();
        if (firstCountry < secondCountry) return -1;
        if (firstCountry > secondCountry) return 1;
        return 0;
    });
}

function getYears() {
    let l__Years__By__Film = [...new Set(g__Films.map(l__Films => l__Films.releasedEvent))];
    let l__Years = [];
    for (l__Years__By__Film__Index in l__Years__By__Film) {
        l__Years.push(l__Years__By__Film[l__Years__By__Film__Index].name);
    }
    l__Distinct__Years__Array = [...new Set(l__Years)].sort((p__First__Year, p__Second__Year) => {
        return p__First__Year - p__Second__Year;
    });
}

function fillGenreDropdown() {
    let l__Advanced__Search__Genre__Select = document.getElementById("advancedSearchGenreInput");

    for (l__Genre in l__Distinct__Genres__Array) {
        // Create option
        let l__Genre__Option = document.createElement("option");
        l__Genre__Option.textContent = l__Distinct__Genres__Array[l__Genre];
        l__Genre__Option.setAttribute("value", l__Distinct__Genres__Array[l__Genre]);
        // Append option
        l__Advanced__Search__Genre__Select.appendChild(l__Genre__Option);
    }
}

function fillCountryDropdown() {
    const l__Advanced__Search__Country__Select = document.getElementById("advancedSearchCountryInput");

    l__Distinct__Countries__Array.forEach(country => {
        // Create option
        const l__Country__Option = document.createElement("option");
        l__Country__Option.textContent = country;
        l__Country__Option.setAttribute("value", country);
        // Append option
        l__Advanced__Search__Country__Select.appendChild(l__Country__Option);
    });
}

function fillYearDropdown() {
    let l__Advanced__Search__Year__Select = document.getElementById("advancedSearchYearInput");

    for (l__Year in l__Distinct__Years__Array) {
        // Create option
        let l__Year__Option = document.createElement("option");
        l__Year__Option.textContent = l__Distinct__Years__Array[l__Year];
        l__Year__Option.setAttribute("value", l__Distinct__Years__Array[l__Year]);
        // Append option
        l__Advanced__Search__Year__Select.appendChild(l__Year__Option);
    }
}

async function handleBasicSearch() {
    let l__Form__Data = $("#basicSearchForm").serializeArray();

    console.log(l__Form__Data)

    g__Filtered__Films = [...new Set(g__Films.filter(l__Film => l__Film.name.toLowerCase().includes(l__Form__Data[0].value.toLowerCase())))];

    clearPosters();

    if (g__Filtered__Films.length == 0) g__Filtered__Films = [...g__Films];

    await generatePosters(g__Filtered__Films);

    if (g__Logged__User != undefined) enableAddComments(g__Filtered__Films);
    else disableAddComments();

    enablePostersButtons(g__Filtered__Films);
}

async function handleAdvancedSearch() {
    let l__Form__Data = $("#advancedSearchForm").serializeArray();
    
    const [filmName, filmGenre, filmReleasedYear, filmCountry] = l__Form__Data;

    g__Filtered__Films = [];

    // Filter by name
    if (filmName.value != '') {
        g__Filtered__Films = [...new Set(g__Films.filter(l__Film => l__Film.name.toLowerCase().includes(filmName.value.toLowerCase())))];
    }

    // Filter by genre
    if (filmGenre.value != 'None') {
        if (g__Filtered__Films.length > 0) {
            for (l__Film in g__Filtered__Films) {
                for (l__Genre in g__Filtered__Films[l__Film].genre) {
                    if (g__Filtered__Films[l__Film].genre[l__Genre].name == filmGenre.value) {
                        g__Filtered__Films.push(g__Filtered__Films[l__Film]);
                    }
                }
            }
            g__Filtered__Films = [...new Set(g__Filtered__Films)];
        } else {
            for (l__Film in g__Films) {
                for (l__Genre in g__Films[l__Film].genre) {
                    if (g__Films[l__Film].genre[l__Genre].name == filmGenre.value) {
                        g__Filtered__Films.push(g__Films[l__Film]);
                    }
                }
            }
        }
        g__Filtered__Films = [...new Set(g__Filtered__Films)];
    }

    // Filter by release year
    if (filmReleasedYear.value != 'None') {
        if (g__Filtered__Films.length > 0) {
            g__Filtered__Films = [...new Set(g__Filtered__Films.filter(l__Film => l__Film.releasedEvent.name == filmReleasedYear.value))];
        } else {
            g__Filtered__Films = [...new Set(g__Films.filter(l__Film => l__Film.releasedEvent.name == filmReleasedYear.value))];
        }
    }
    
    // Filter by country
    if (filmCountry.value != 'None') {
        if (g__Filtered__Films.length > 0) {
            g__Filtered__Films = [...new Set(g__Filtered__Films.filter(l__Film => l__Film.countryOfOrigin.name == filmCountry.value))];
        } else {
            g__Filtered__Films = [...new Set(g__Films.filter(l__Film => l__Film.countryOfOrigin.name == filmCountry.value))];
        }
    }

    clearPosters();

    if (g__Filtered__Films.length == 0) g__Filtered__Films = [...g__Films];

    await generatePosters(g__Filtered__Films);

    if (g__Logged__User != undefined) enableAddComments();
    else disableAddComments();

    enablePostersButtons(g__Filtered__Films);

    document.getElementById("advancedSearchForm").reset();
}