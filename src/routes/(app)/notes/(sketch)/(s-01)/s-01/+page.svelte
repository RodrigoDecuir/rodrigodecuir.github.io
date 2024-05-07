<script>
    let count = 0;
    let quotes = [
        'Venera tu capacidad crítica.', 
        'Vergonzozo es que tu alma desfallezca cuando tu cuerpo no lo hace.', 
        'Acostúmbrate a escuchar con la mayor atención lo que se te dice y, hasta donde es posible, a penetrar en la mente del que habla.',
        'La perfección moral consiste en vivir cada día como si fuera el último, no ser apasionado ni indiferente y no actuar con falsedad.',
        'Presta atención al objeto, la actividad, la doctrina o el significado. Mereces lo que te pasa, pues prefieres ser bueno mañana en vez de hoy.',
        'Aceptar sin orgullo, renunciar sin apego.',
        'En la constitución del ser racional no veo ninguna virtud que se rebele contra la justicia, pero sí veo una frenta al placer: el autocontrol.',
        'Basta con formarse una opinión exacta en el presente, realizar ahora una acción útil a la sociedad, y estar dispuesto en este momento a aceptar todo lo que ocurre.',
        'Borrar la imaginación, reprimir el impulso, apagar el deseo, mantener el autocontrol.',
        'Hoy he escapado de los estorbos, o, mejor, los he expulsado, pues en realidad estaban dentro de mí: eran mis opiniones.',
        'No en el sentir, sino en la acción. Allí, para el ser racional y social, están el bien y el mal, la virtud y el vicio. En la acción.',
        'Todo lo que ves enseguida desaparecerá y quienes lo vean, ellos también desaparecerán rápidamente. El que muera ya muy viejo será igual que el que muera de forma prematura.',
        'Si se equivoca, enséñale con amabilidad y muéstrale su error. Si no eres capaz, la culpa es tuya, o mejor, de nadie.',
        'Ya no discutas más qué es un hombre bueno: sé uno.',
        'Las cosas que te perturban no vienen a ti, eres tú quien las persigue o las rehuyé. Pero no se moverán si mantienes tranquilo tu juicio. No tendrás que seguirlas ni evitarlas.',
        'En sexto lugar, cuando estés muy indignado o sufras, debes recordar que la vida del hombre no dura más que un instante y que en un abrir y cerrar de ojos todos yaceremos muertos.',
        'Cuida tus pensamientos, porque se convertirán en tus palabras. Cuida tus palabras, porque se convertirán en tus actos. Cuida tus actos porque se convertirán en tus hábitos. Cuida tus hábitos, porque se convertirán en tu destino. -Ghandi',
        'A menudo me he tenido que comer mis palabras y he descubierto que eran una dieta equilibrada. -Churchill'
    ];

    let currentQuote = '';
    
    function increment() {
        count +=1;
        if (count > quotes.length) {
            count = 1;
        }
    
        currentQuote = quotes[count - 1];
    }

</script>

<button on:click={increment}> 
    {count === 1 ? '~' : '~'}
</button>

<p id="quote" class="text-center">{currentQuote}</p>
