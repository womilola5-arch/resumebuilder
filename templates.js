/**
 * Resume Templates Library
 */

const Templates = {
    // 1. Modern Professional Template
    modern: (data, color) => `
        <div style="font-family: 'Inter', sans-serif; color: #333; line-height: 1.6;">
            <div style="background: ${color}; color: white; padding: 2.5rem 3rem;">
                <h1 style="margin: 0; font-size: 2.5rem; font-weight: 700;">${data.fullName || 'Your Name'}</h1>
                <p style="margin: 0.5rem 0 0; font-size: 1.2rem; opacity: 0.9;">${data.jobTitle || 'Professional Title'}</p>
                
                <div style="margin-top: 1.5rem; display: flex; flex-wrap: wrap; gap: 1.5rem; font-size: 0.9rem; opacity: 0.9;">
                    ${data.email ? `<div><i class="fas fa-envelope"></i> ${data.email}</div>` : ''}
                    ${data.phone ? `<div><i class="fas fa-phone"></i> ${data.phone}</div>` : ''}
                    ${data.location ? `<div><i class="fas fa-map-marker-alt"></i> ${data.location}</div>` : ''}
                    ${data.website ? `<div><i class="fas fa-link"></i> ${data.website}</div>` : ''}
                </div>
            </div>

            <div style="padding: 3rem;">
                ${data.summary ? `
                <div style="margin-bottom: 2rem;">
                    <h2 style="color: ${color}; border-bottom: 2px solid ${color}; padding-bottom: 0.5rem; margin-bottom: 1rem; font-size: 1.2rem; text-transform: uppercase; letter-spacing: 1px;">Professional Summary</h2>
                    <p>${data.summary}</p>
                </div>
                ` : ''}

                ${data.skills ? `
                <div style="margin-bottom: 2rem;">
                    <h2 style="color: ${color}; border-bottom: 2px solid ${color}; padding-bottom: 0.5rem; margin-bottom: 1rem; font-size: 1.2rem; text-transform: uppercase; letter-spacing: 1px;">Key Skills</h2>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        ${data.skills.split(',').map(skill => 
                            `<span style="background: #f3f4f6; padding: 0.3rem 0.8rem; border-radius: 4px; font-size: 0.9rem;">${skill.trim()}</span>`
                        ).join('')}
                    </div>
                </div>
                ` : ''}

                ${data.work && data.work.length > 0 ? `
                <div style="margin-bottom: 2rem;">
                    <h2 style="color: ${color}; border-bottom: 2px solid ${color}; padding-bottom: 0.5rem; margin-bottom: 1rem; font-size: 1.2rem; text-transform: uppercase; letter-spacing: 1px;">Experience</h2>
                    ${data.work.map(job => `
                        <div style="margin-bottom: 1.5rem;">
                            <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.3rem;">
                                <h3 style="margin: 0; font-size: 1.1rem; font-weight: 700;">${job.title}</h3>
                                <span style="font-size: 0.9rem; color: #666; white-space: nowrap;">${job.startDate} - ${job.endDate}</span>
                            </div>
                            <div style="font-weight: 500; color: #555; margin-bottom: 0.5rem;">${job.company}</div>
                            <p style="margin: 0; font-size: 0.95rem; color: #444;">${job.description.replace(/\n/g, '<br>')}</p>
                        </div>
                    `).join('')}
                </div>
                ` : ''}

                ${data.education && data.education.length > 0 ? `
                <div>
                    <h2 style="color: ${color}; border-bottom: 2px solid ${color}; padding-bottom: 0.5rem; margin-bottom: 1rem; font-size: 1.2rem; text-transform: uppercase; letter-spacing: 1px;">Education</h2>
                    ${data.education.map(edu => `
                        <div style="margin-bottom: 1rem;">
                            <div style="display: flex; justify-content: space-between; align-items: baseline;">
                                <h3 style="margin: 0; font-size: 1.1rem; font-weight: 600;">${edu.school}</h3>
                                <span style="font-size: 0.9rem; color: #666;">${edu.gradDate}</span>
                            </div>
                            <div style="color: #555;">${edu.degree}</div>
                        </div>
                    `).join('')}
                </div>
                ` : ''}
            </div>
        </div>
    `,

    // 2. Minimalist Template
    minimal: (data, color) => `
        <div style="font-family: 'Merriweather', serif; color: #333; line-height: 1.8; padding: 4rem;">
            <div style="text-align: center; margin-bottom: 3rem; border-bottom: 1px solid #ddd; padding-bottom: 2rem;">
                <h1 style="margin: 0; font-size: 2.2rem; font-weight: 700; color: #000; letter-spacing: -0.5px;">${data.fullName || 'Your Name'}</h1>
                <p style="margin: 0.5rem 0 1rem; font-size: 1.1rem; font-family: 'Inter', sans-serif; color: #555;">${data.jobTitle || 'Title'}</p>
                <div style="font-family: 'Inter', sans-serif; font-size: 0.9rem; color: #666;">
                    ${[data.email, data.phone, data.location, data.website].filter(Boolean).join(' &bull; ')}
                </div>
            </div>

            ${data.summary ? `
            <div style="margin-bottom: 2.5rem;">
                <p style="font-size: 1rem;">${data.summary}</p>
            </div>
            ` : ''}

            ${data.work && data.work.length > 0 ? `
            <div style="margin-bottom: 2.5rem;">
                <h3 style="font-family: 'Inter', sans-serif; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 2px; color: #888; margin-bottom: 1.5rem; border-bottom: 1px solid #eee; padding-bottom: 0.5rem;">Experience</h3>
                ${data.work.map(job => `
                    <div style="margin-bottom: 2rem;">
                        <h4 style="margin: 0; font-size: 1.1rem; font-weight: 700;">${job.company}</h4>
                        <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem; font-family: 'Inter', sans-serif; font-size: 0.9rem; color: #666;">
                            <span>${job.title}</span>
                            <span>${job.startDate} — ${job.endDate}</span>
                        </div>
                        <p style="margin: 0; font-size: 0.95rem;">${job.description.replace(/\n/g, '<br>')}</p>
                    </div>
                `).join('')}
            </div>
            ` : ''}

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
                ${data.education && data.education.length > 0 ? `
                <div>
                    <h3 style="font-family: 'Inter', sans-serif; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 2px; color: #888; margin-bottom: 1rem;">Education</h3>
                    ${data.education.map(edu => `
                        <div style="margin-bottom: 1rem;">
                            <div style="font-weight: 700;">${edu.school}</div>
                            <div style="font-size: 0.9rem;">${edu.degree}</div>
                            <div style="font-size: 0.85rem; color: #666;">${edu.gradDate}</div>
                        </div>
                    `).join('')}
                </div>
                ` : ''}

                ${data.skills ? `
                <div>
                    <h3 style="font-family: 'Inter', sans-serif; font-size: 0.85rem; text-transform: uppercase; letter-spacing: 2px; color: #888; margin-bottom: 1rem;">Skills</h3>
                    <div style="line-height: 1.6;">${data.skills.split(',').join(', ')}</div>
                </div>
                ` : ''}
            </div>
        </div>
    `,
    
    // 3. Creative Template (Left Sidebar)
    creative: (data, color) => `
        <div style="font-family: 'Inter', sans-serif; display: flex; height: 100%; min-height: 1125px;">
            <div style="width: 35%; background: #2d2d2d; color: white; padding: 3rem 2rem;">
                <div style="margin-bottom: 3rem; text-align: center;">
                    <div style="width: 100px; height: 100px; background: ${color}; border-radius: 50%; margin: 0 auto 1.5rem; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; font-weight: bold;">
                        ${data.fullName ? data.fullName.charAt(0) : 'J'}
                    </div>
                    <h2 style="font-size: 1.5rem; margin-bottom: 0.5rem;">${data.fullName || 'Your Name'}</h2>
                    <p style="opacity: 0.8; font-size: 0.9rem;">${data.jobTitle || 'Title'}</p>
                </div>

                <div style="margin-bottom: 2.5rem; font-size: 0.9rem;">
                    <div style="margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
                        <span style="background: rgba(255,255,255,0.1); padding: 5px; border-radius: 4px;"><i class="fas fa-envelope"></i></span> 
                        ${data.email || 'email@example.com'}
                    </div>
                    <div style="margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
                        <span style="background: rgba(255,255,255,0.1); padding: 5px; border-radius: 4px;"><i class="fas fa-phone"></i></span>
                        ${data.phone || 'Phone'}
                    </div>
                    <div style="margin-bottom: 1rem; display: flex; align-items: center; gap: 10px;">
                        <span style="background: rgba(255,255,255,0.1); padding: 5px; border-radius: 4px;"><i class="fas fa-map-marker-alt"></i></span>
                        ${data.location || 'Location'}
                    </div>
                </div>

                ${data.skills ? `
                <div style="margin-bottom: 2rem;">
                    <h3 style="font-size: 1rem; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 0.5rem; margin-bottom: 1rem; text-transform: uppercase;">Skills</h3>
                    <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                        ${data.skills.split(',').map(s => 
                            `<span style="background: ${color}; padding: 3px 8px; border-radius: 3px; font-size: 0.85rem;">${s.trim()}</span>`
                        ).join('')}
                    </div>
                </div>
                ` : ''}

                ${data.education && data.education.length > 0 ? `
                <div>
                    <h3 style="font-size: 1rem; border-bottom: 1px solid rgba(255,255,255,0.2); padding-bottom: 0.5rem; margin-bottom: 1rem; text-transform: uppercase;">Education</h3>
                    ${data.education.map(edu => `
                        <div style="margin-bottom: 1rem; font-size: 0.9rem;">
                            <div style="font-weight: bold;">${edu.school}</div>
                            <div style="opacity: 0.8;">${edu.degree}</div>
                            <div style="font-size: 0.8rem; opacity: 0.6;">${edu.gradDate}</div>
                        </div>
                    `).join('')}
                </div>
                ` : ''}
            </div>

            <div style="flex: 1; padding: 3rem; color: #333;">
                ${data.summary ? `
                <div style="margin-bottom: 2.5rem;">
                    <h2 style="color: ${color}; font-size: 1.5rem; margin-bottom: 1rem; font-weight: 700;">Profile</h2>
                    <p style="line-height: 1.6;">${data.summary}</p>
                </div>
                ` : ''}

                ${data.work && data.work.length > 0 ? `
                <div>
                    <h2 style="color: ${color}; font-size: 1.5rem; margin-bottom: 1.5rem; font-weight: 700;">Experience</h2>
                    ${data.work.map(job => `
                        <div style="margin-bottom: 2rem; position: relative; padding-left: 1.5rem; border-left: 2px solid #eee;">
                            <div style="position: absolute; left: -6px; top: 5px; width: 10px; height: 10px; border-radius: 50%; background: ${color};"></div>
                            <h3 style="margin: 0; font-size: 1.2rem;">${job.title}</h3>
                            <div style="color: ${color}; font-weight: 600; margin: 0.2rem 0;">${job.company}</div>
                            <div style="font-size: 0.9rem; color: #888; margin-bottom: 0.8rem;">${job.startDate} - ${job.endDate}</div>
                            <p style="line-height: 1.6; font-size: 0.95rem;">${job.description.replace(/\n/g, '<br>')}</p>
                        </div>
                    `).join('')}
                </div>
                ` : ''}
            </div>
        </div>
    `
};
