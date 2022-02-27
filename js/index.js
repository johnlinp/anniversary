(() => {
    const createItemInContainer = (className, text) => {
        const item = document.createElement('div');
        item.classList.add('flex-item');
        item.classList.add(className);
        item.innerHTML = text;

        const container = document.getElementById('container');
        container.appendChild(item);
    };

    const makeBackgroundPurpleHeartbeat = (className) => {
        const body = document.getElementById('body');
        body.classList.add(className);
    };

    const calculateNextAnniversary = (start, now) => {
        if (now.getDate() < start.getDate()) {
            return new Date(now.getFullYear(), now.getMonth(), start.getDate());
        }
        if (now.getMonth() === 11) {
            return new Date(now.getFullYear() + 1, 0, start.getDate());
        }
        return new Date(now.getFullYear(), now.getMonth() + 1, start.getDate());
    };

    const renderTime = (count, unit) => {
        if (count === 1) {
            return `${count} ${unit}`
        }
        return `${count} ${unit}s`
    };

    const start = new Date('December 25, 2008');
    const now = new Date();
    const isAnniversary = (now.getDate() === start.getDate());

    if (isAnniversary) {
        const yearsBetween = (now.getMonth() >= start.getMonth()) ? now.getFullYear() - start.getFullYear() : now.getFullYear() - start.getFullYear() - 1;
        const monthsBetween = (now.getMonth() >= start.getMonth()) ? now.getMonth() - start.getMonth() : now.getMonth() - start.getMonth() + 12;
        const totalMonthsBetween = yearsBetween * 12 + monthsBetween;

        if (monthsBetween === 0) {
            makeBackgroundPurpleHeartbeat('heartbeat-purple-yellow');
            createItemInContainer('year-and-month', `Today's our ${renderTime(yearsBetween, 'year')} anniversary.`);
        } else {
            makeBackgroundPurpleHeartbeat('heartbeat-purple');
            createItemInContainer('year-and-month', `Today's our ${renderTime(yearsBetween, 'year')} and ${renderTime(monthsBetween, 'month')} anniversary.`);
        }
        createItemInContainer('only-month', `It's been ${renderTime(totalMonthsBetween, 'month')} months since.`);
    } else {
        const nextAnniversary = calculateNextAnniversary(start, now);
        const millisecondsBetween = nextAnniversary.getTime() - now.getTime();
        const daysBetween = Math.ceil(millisecondsBetween / (3600 * 24 * 1000));

        createItemInContainer('countdown', `Still ${renderTime(daysBetween, 'day')} until next anniversary.`);
    }
})();
