import PageTemplate from '../components/PageTemplate'

export default function About() {
  return (
    <PageTemplate title="About Us">
      <div className="max-w-3xl mx-auto">
        <p className="text-lg text-gray-700 mb-6">
          AI Template is a cutting-edge platform designed to empower businesses and developers with state-of-the-art AI capabilities. Our mission is to make AI accessible, efficient, and scalable for organizations of all sizes.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Founded in 2023, our team of expert engineers and data scientists have been at the forefront of AI innovation, developing solutions that drive real-world impact across industries.
        </p>
        <p className="text-lg text-gray-700">
          We're committed to pushing the boundaries of what's possible with AI, while maintaining a strong focus on ethical AI practices and data privacy.
        </p>
      </div>
    </PageTemplate>
  )
}