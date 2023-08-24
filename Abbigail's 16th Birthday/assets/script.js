document.addEventListener("DOMContentLoaded", function() {
    // Get the current date and set it to midnight
    const currentDate = new Date();
    currentDate.setHours(0);
    currentDate.setMinutes(0);
    currentDate.setSeconds(0);

    // Set the target date to tomorrow's midnight
    const targetDate = new Date(currentDate);
    targetDate.setDate(targetDate.getDate() + 1);

    // Function to update the countdown
    function updateCountdown() {
        const timeDifference = targetDate - new Date();

        if (timeDifference <= 0) {
            document.getElementById("timer").innerHTML = "It's Abbigail's 16th Birthday!";
        } else {
            const hours = Math.floor(timeDifference / (1000 * 60 * 60));
            const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

            document.getElementById("timer").innerHTML = `${hours}h ${minutes}m ${seconds}s`;
        }
    }

    // Initial update
    updateCountdown();

    // Update every second
    setInterval(updateCountdown, 1000);
});
