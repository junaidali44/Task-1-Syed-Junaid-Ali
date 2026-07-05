import { heroTechData, courseData} from "./data.js";
function getCourseById(id) {
    return courseData[id] || null;
}

function getAllCourses() {
    return Object.values(courseData);
}

function getCourseTopics(courseId) {
    const course = getCourseById(courseId);
    return course ? course.topics : [];
}

function getTopicById(courseId, topicId) {
    const course = getCourseById(courseId);
    if (!course) return null;
    return course.topics.find(t => t.id === topicId) || null;
}

        function getCourseParam() {
            const params = new URLSearchParams(window.location.search);
            return params.get('course');
        }

        // Render all courses grid
        function renderAllCourses() {
            const container = document.getElementById('courseContent');
            const courses = getAllCourses();

            container.innerHTML = `
                        <div class="course-grid">
                            ${courses.map(course => `
                                <a href="?course=${course.id}" class="course-card">
                                    <div class="course-card-header">
                                        <div class="course-card-icon">
                                            <i class="${course.icon}" style="color: ${course.color}"></i>
                                        </div>
                                        <h3>${course.name}</h3>
                                    </div>
                                    <p>${course.description}</p>
                                    <div class="course-card-meta">
                                        <span>📚 ${course.totalLessons} lessons</span>
                                        <span>📖 ${course.totalTopics} topics</span>
                                    </div>
                                </a>
                            `).join('')}
                        </div>
                    `;
        }

        // Render single course detail
        function renderCourseDetail(courseId) {
            const course = getCourseById(courseId);
            const container = document.getElementById('courseContent');

            if (!course) {
                container.innerHTML = `
                            <div class="no-result">
                                <h2>Course not found</h2>
                                <p>Please check the URL or go back to all courses</p>
                                <a href="courses.html" style="display:inline-block;margin-top:var(--space-4);color:var(--color-primary);">View All Courses</a>
                            </div>
                        `;
                return;
            }

            let html = `
                        <div class="course-detail">
                            <div class="course-detail-header">
                                <div style="display:flex;align-items:center;gap:var(--space-4);margin-bottom:var(--space-2);">
                                    <i class="${course.icon}" style="font-size:2rem;color:${course.color}"></i>
                                    <h2>${course.name}</h2>
                                </div>
                                <p>${course.description}</p>
                                <div style="display:flex;gap:var(--space-4);margin-top:var(--space-2);color:var(--color-text-muted);font-size:0.875rem;">
                                    <span>${course.totalLessons} lessons</span>
                                    <span>${course.totalTopics} topics</span>
                                </div>
                            </div>
                        `;

            // Render topics and lessons
            course.topics.forEach(topic => {
                html += `
                            <div class="topic-section">
                                <h3>${topic.name}</h3>
                                ${topic.lessons.map(lesson => `
                                    <div class="lesson-card">
                                        <h4>${lesson.title}</h4>
                                        <p>${lesson.description}</p>
                                        <div class="code-block">
                                            <pre>${lesson.code}</pre>
                                        </div>
                                        <div class="explanation">
                                            <p>💡 ${lesson.explanation}</p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        `;
            });

            html += `
                            <div style="margin-top:var(--space-8);padding:var(--space-6);background:var(--color-primary-soft);border-radius:var(--radius-lg);text-align:center;">
                                <h3 style="font-size:1.25rem;margin-bottom:var(--space-2);">Ready to master ${course.name}?</h3>
                                <p style="color:var(--color-text-secondary);margin-bottom:var(--space-4);">Start learning today and build real-world skills</p>
                                 </div>
                        </div>
                    `;

            container.innerHTML = html;
        }

       
        document.addEventListener('DOMContentLoaded', () => {
            const courseParam = getCourseParam();

            if (courseParam) {
                renderCourseDetail(courseParam);
            } else {
                renderAllCourses();
            }
        });
    