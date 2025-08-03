// 햄버거 메뉴 토글
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}

// 스크롤 시 네비게이션 바 스타일 변경
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(44, 62, 80, 0.95)';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none';
    }
});

// 스무스 스크롤
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 관리자 섹션 토글
function toggleMembersSection() {
    const membersSection = document.getElementById('members');
    if (membersSection) {
        membersSection.style.display = membersSection.style.display === 'none' ? 'block' : 'none';
    }
}

// 회원 목록 엑셀 다운로드
function exportMembers() {
    // 실제 구현에서는 서버에서 데이터를 가져와 엑셀 파일로 변환
    회원 목록 엑셀 다운로드 기능
}

document.addEventListener('DOMContentLoaded', () => {
    // 모바일 메뉴 토글
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // 네비게이션 링크 클릭 시 메뉴 닫기
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // 스크롤 애니메이션
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    const hiddenElements = document.querySelectorAll('.skill-item, .contact-item');
    hiddenElements.forEach((el) => observer.observe(el));

    // 지도 탭 전환 기능
    const mapTabs = document.querySelectorAll('.map-tab');
    const mapContents = document.querySelectorAll('.map-content');

    mapTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // 모든 탭에서 active 클래스 제거
            mapTabs.forEach(t => t.classList.remove('active'));
            mapContents.forEach(content => content.classList.remove('active'));
            
            // 클릭된 탭에 active 클래스 추가
            tab.classList.add('active');
            
            // 해당하는 지도 컨텐츠 표시
            const mapType = tab.getAttribute('data-map');
            const targetMap = document.getElementById(`${mapType}-map`);
            if (targetMap) {
                targetMap.classList.add('active');
            }
        });
    });
}); 
