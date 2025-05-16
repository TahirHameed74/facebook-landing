import Link from "next/link";

export default function Footer() {
	return (
		<div
			style={{
				backgroundColor: "#f5f5f5",
				padding: "20px",
				marginTop: "40px",
				textAlign: "center",
			}}>
			<div>
				<p>© 2025 My Website. All rights reserved.</p>
				<div style={{ marginTop: "10px" }}>
					<Link
						href="/privacy-policy"
						style={{ color: "#0070f3", marginRight: "15px" }}>
						Privacy Policy
					</Link>
					<Link href="/terms" style={{ color: "#0070f3" }}>
						Terms of Service
					</Link>
				</div>
			</div>
		</div>
	);
}
